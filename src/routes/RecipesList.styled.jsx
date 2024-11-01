import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

export const ContainerRecipes = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(30, 30, 30, 0.9)',
  borderRadius: '15px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
  padding: '20px 20px',
  margin: '20px',
  marginTop: '0',
  overflowY: 'auto',
  width: '100%',
  maxWidth: '1200px',
  minHeight: '600px'
}));

export const FilterButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
}));

export const RecipeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '15px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
  padding: '10px',
  marginBottom: '20px',
  width: '100%',
  maxWidth: '300px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    width: '90%',
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxHeight: '200px',
  overflow: 'hidden',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
  marginBottom: '15px',
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
  },
}));

export const DescriptionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '15px',
  color: 'rgba(30, 30, 30, 0.85)',
}));

export const RecipeTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  marginBottom: '8px',
}));

export const SeeMoreButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '0.9rem',
  fontWeight: 'bold',
  marginTop: '10px',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
