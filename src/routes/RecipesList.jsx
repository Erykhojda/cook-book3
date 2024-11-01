import React, { useContext, useState, useEffect } from "react";
import CartContext from "../CartContext";
import image from '../assets/no-image.jpg';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { CardMedia, Backdrop, Typography, Box, CircularProgress } from '@mui/material';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { ContainerRecipes, RecipeBox, ImageContainer, DescriptionContainer, RecipeTitle, FilterButton, SeeMoreButton } from './RecipesList.styled';
import { useTranslation } from 'react-i18next';

function Recipes() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [switchRecipesCategory, setSwitchRecipesCategory] = useState('Public');
  const [loading, setLoading] = useState(true);
  const recipesCollectionRef = collection(db, "recipes");

  const { recipes, setRecipes, isAuth } = useContext(CartContext);
  const navigate = useNavigate();
  const [cookies] = useCookies(['accessToken']);
  const id = cookies.accessToken;

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      const data = await getDocs(recipesCollectionRef);
      setRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    getRecipes();
  }, []);

  const handleClose = () => setOpen(false);
  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
    navigate(`/recipes/${item.id}`);
  };

  return (
    <ContainerRecipes>
      <Typography variant="h4" gutterBottom color="textPrimary">{t('recipes.title')}</Typography>
      <Box display="flex" justifyContent="center" gap={2} mb={3}>
        <FilterButton onClick={() => setSwitchRecipesCategory("Public")}>{t('recipes.filterPublic')}</FilterButton>
        <FilterButton onClick={() => setSwitchRecipesCategory("Private")}>{t('recipes.filterPrivate')}</FilterButton>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress color="primary" />
        </Box>
      ) : recipes.length === 0 ? (
        <Typography variant="h6" color="warning" align="center" mt={3}>
          {t('recipes.noRecipes')}
        </Typography>
      ) : (
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
          {recipes.map((item, index) => (
            <RecipeBox key={index}>
              <ImageContainer>
                <CardMedia
                  component="img"
                  height="150"
                  image={item.imageUrl || image}
                  alt={item.title}
                />
              </ImageContainer>
              <DescriptionContainer>
                <RecipeTitle variant="h6">{item.title}</RecipeTitle>
                <SeeMoreButton onClick={() => handleOpen(item)}>{t('recipes.seeMore')}</SeeMoreButton>
              </DescriptionContainer>
            </RecipeBox>
          ))}
        </Box>
      )}

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
        {selectedItem && (
          <RecipeBox>
            <ImageContainer>
              <CardMedia
                component="img"
                height="250"
                image={selectedItem.imageUrl || image}
                alt={selectedItem.title}
              />
            </ImageContainer>
            <DescriptionContainer>
              <Typography variant="h6" color="primary" mb={1}>{selectedItem.title}</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>{selectedItem.description}</Typography>
              <Typography variant="subtitle1">{t('recipes.ingredients')}:</Typography>
              <ul style={{ paddingLeft: '20px', color: 'rgba(255, 255, 255, 0.7)' }}>
                {selectedItem.ingredientsList.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </DescriptionContainer>
          </RecipeBox>
        )}
      </Backdrop>
    </ContainerRecipes>
  );
}

export default Recipes;
