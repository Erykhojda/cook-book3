import React, { useContext, useState } from "react";
import { Box, Button, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Card, CardContent, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Delete as DeleteIcon } from "@mui/icons-material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage, auth } from "../../firebase";
import { useTranslation } from 'react-i18next';
import CartContext from "../../CartContext";

const CreateRecipe = () => {
  const { t } = useTranslation();
  const { isAuth } = useContext(CartContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [instruction, setInstruction] = useState("");
  const [instructions, setInstructions] = useState([]);
  const [status, setStatus] = useState("Public");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const recipesCollectionRef = collection(db, "recipes");

  const handleAddIngredient = () => {
    if (ingredient.trim() !== "") {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient("");
      setErrors((prev) => ({ ...prev, ingredient: "" }));
    } else {
      setErrors((prev) => ({ ...prev, ingredient: t('createRecipe.validation.ingredientRequired') }));
    }
  };

  const handleRemoveIngredient = (index) => {
    const newList = ingredientsList.filter((_, i) => i !== index);
    setIngredientsList(newList);
  };

  const handleAddInstruction = () => {
    if (instruction.trim()) {
      setInstructions([...instructions, instruction]);
      setInstruction("");
      setErrors((prev) => ({ ...prev, instruction: "" }));
    } else {
      setErrors((prev) => ({ ...prev, instruction: t('createRecipe.validation.instructionRequired') }));
    }
  };

  const handleRemoveItem = (list, setList, index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    } else {
      console.error("No file selected for upload.");
    }
  };

  const validateFields = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = t('createRecipe.validation.titleRequired');
    if (!description.trim()) newErrors.description = t('createRecipe.validation.descriptionRequired');
    if (ingredientsList.length === 0) newErrors.ingredientsList = t('createRecipe.validation.atLeastOneIngredient');
    if (instructions.length === 0) newErrors.instructions = t('createRecipe.validation.atLeastOneInstruction');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateFields()) return;

    let imageUrl = "";
    if (image) {
      const imageRef = ref(storage, `images/${image.name}-${Date.now()}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    try {
      await addDoc(recipesCollectionRef, {
        title,
        description,
        ingredientsList,
        instructions,
        status: isAuth ? status : "Public",
        imageUrl,
        author: isAuth ? { name: auth.currentUser?.displayName || "Anonymous", id: auth.currentUser?.uid || "unknown" } : { name: "Anonymous", id: "unknown" },
      });
      navigate("/recipes");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(t('createRecipe.validation.failedToAddRecipe'));
    }
  };

  return (
    <Card sx={{ maxWidth: 500, width: "100%", padding: 2, borderRadius: 2, boxShadow: 5 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom color="primary" textAlign="center">
          {t('createRecipe.title')}
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Button
            variant="contained"
            component="label"
            startIcon={<CloudUploadIcon />}
            sx={{ mb: 2 }}
          >
            {t('createRecipe.chooseImage')}
            <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
          </Button>
          {imagePreview && (
            <Box
              component="img"
              src={imagePreview}
              alt="Preview"
              sx={{ width: "100%", maxHeight: 200, borderRadius: 2, boxShadow: 2 }}
            />
          )}
        </Box>

        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label={t('createRecipe.titleLabel')}
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={!!errors.title}
            helperText={errors.title}
          />
          <TextField
            label={t('createRecipe.descriptionLabel')}
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={!!errors.description}
            helperText={errors.description}
          />

          <Box display="flex" gap={1}>
            <TextField
              label={t('createRecipe.ingredientLabel')}
              variant="outlined"
              fullWidth
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              error={!!errors.ingredient}
              helperText={errors.ingredient}
            />
            <Button variant="contained" color="primary" onClick={handleAddIngredient}>
              {t('createRecipe.addIngredient')}
            </Button>
          </Box>
          <List>
            {ingredientsList.map((item, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveIngredient(index)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          {errors.ingredientsList && (
            <Typography color="error" variant="body2" sx={{ mt: -1, mb: 2 }}>
              {errors.ingredientsList}
            </Typography>
          )}

          <Box mt={3}>
            <Typography variant="h6">{t('createRecipe.instructions')}</Typography>
            <Box display="flex" gap={1} mt={1}>
              <TextField
                label={t('createRecipe.addInstruction')}
                variant="outlined"
                fullWidth
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                error={!!errors.instruction}
                helperText={errors.instruction}
              />
              <Button variant="contained" onClick={handleAddInstruction}>{t('createRecipe.addInstruction')}</Button>
            </Box>
            <List>
              {instructions.map((step, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton onClick={() => handleRemoveItem(instructions, setInstructions, index)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={`${index + 1}. ${step}`} />
                </ListItem>
              ))}
            </List>
            {errors.instructions && (
              <Typography color="error" variant="body2" sx={{ mt: -1, mb: 2 }}>
                {errors.instructions}
              </Typography>
            )}
          </Box>

          <FormControl component="fieldset">
            <RadioGroup row value={status} onChange={(e) => setStatus(e.target.value)}>
              <FormControlLabel value="Public" control={<Radio />} label={t('createRecipe.public')} />
              <FormControlLabel
                value="Private"
                control={<Radio />}
                label={t('createRecipe.private')}
                disabled={!isAuth}
              />
            </RadioGroup>
          </FormControl>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            {t('createRecipe.create')}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreateRecipe;
