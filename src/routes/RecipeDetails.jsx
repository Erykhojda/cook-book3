import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noImage from '../assets/no-image.jpg';
import { Typography, Box, Card, CardMedia, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useTranslation } from 'react-i18next';

const RecipeDetails = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            setLoading(true);
            const recipeDoc = doc(db, "recipes", id);
            const docSnap = await getDoc(recipeDoc);

            if (docSnap.exists()) {
                setRecipe(docSnap.data());
            } else {
                console.log("No such document!");
            }
            setLoading(false);
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return <Typography variant="h6" color="primary" align="center">{t('recipeDetails.loading')}</Typography>;
    }

    if (!recipe) {
        return <Typography variant="h6" color="error" align="center">{t('recipeDetails.notFound')}</Typography>;
    }

    return (
        <Box sx={{ maxWidth: '900px', margin: '0 auto', padding: '20px', background: 'linear-gradient(to bottom, #f5f7fa, #c3cfe2)', borderRadius: 3 }}>
            <Card sx={{ boxShadow: 3, mb: 4, overflow: 'hidden', borderRadius: 4 }}>
                <CardMedia
                    component="img"
                    height="450"
                    image={recipe.imageUrl || noImage}
                    alt={recipe.title}
                    sx={{ objectFit: 'cover', filter: 'brightness(90%)' }}
                />
                <CardContent sx={{ backgroundColor: '#ffffff', padding: 4 }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: '700', color: '#2c3e50' }}>
                        {recipe.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', color: '#555' }}>
                        {recipe.description}
                    </Typography>
                    {recipe.author && (
                        <Typography variant="subtitle2" sx={{ fontStyle: 'italic', color: '#888', mt: 2 }}>
                            {t('recipeDetails.createdBy')} {recipe.author.name}
                        </Typography>
                    )}
                </CardContent>
            </Card>

            <Box sx={{ mb: 4, backgroundColor: '#ffffff', borderRadius: 3, p: 3, boxShadow: 1 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#34495e' }}>{t('recipeDetails.ingredients')}</Typography>
                <Divider sx={{ my: 1 }} />
                <List>
                    {recipe.ingredientsList?.map((ingredient, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemText primary={`• ${ingredient}`} sx={{ color: '#444' }} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box sx={{ backgroundColor: '#ffffff', borderRadius: 3, p: 3, boxShadow: 1 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#34495e' }}>{t('recipeDetails.instructions')}</Typography>
                <Divider sx={{ my: 1 }} />
                {recipe.instructions?.length > 0 ? (
                    <List>
                        {recipe.instructions.map((step, index) => (
                            <ListItem key={index} sx={{ display: 'flex', alignItems: 'flex-start', pl: 0, pb: 1 }}>
                                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', minWidth: '30px', mr: 1 }}>
                                    {index + 1}.
                                </Typography>
                                <ListItemText primary={step} sx={{ color: '#555' }} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography variant="body2" color="text.secondary">{t('recipeDetails.noInstructions')}</Typography>
                )}
            </Box>
        </Box>
    );
};

export default RecipeDetails;
