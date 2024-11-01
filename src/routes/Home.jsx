import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FeaturePaper } from "./Home.styled";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/recipes");
  };

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
      {/* Sekcja powitalna */}
      <Box sx={{ mb: 8, background: 'linear-gradient(to right, #3f51b5, #5c6bc0)', padding: '40px', borderRadius: 3, color: '#fff' }}>
        <Typography variant="h2" fontWeight="bold" color="inherit" gutterBottom>
          {t('home.title')}
        </Typography>
        <Typography variant="h6" color="inherit" paragraph>
          {t('home.description')}
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            size="large"
            onClick={handleGetStarted}
            sx={{ marginRight: 2, backgroundColor: "#fff", color: "#3f51b5", "&:hover": { backgroundColor: "#e0e0e0" } }}
          >
            {t('home.get_started')}
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/createRecipe")}
            sx={{ color: "#fff", borderColor: "#fff", "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" } }}
          >
            {t('home.add_recipe')}
          </Button>
        </Box>
      </Box>

      {/* Sekcja funkcji */}
      <Box mt={8}>
        <Typography variant="h4" fontWeight="bold" color="textPrimary" gutterBottom>
          {t('home.features_title')}
        </Typography>
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={4}>
            <FeaturePaper>
              <Typography variant="h5" fontWeight="medium" color="primary" gutterBottom>
                {t('home.feature_discover')}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {t('home.feature_discover_description')}
              </Typography>
            </FeaturePaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeaturePaper>
              <Typography variant="h5" fontWeight="medium" color="primary" gutterBottom>
                {t('home.feature_share')}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {t('home.feature_share_description')}
              </Typography>
            </FeaturePaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeaturePaper>
              <Typography variant="h5" fontWeight="medium" color="primary" gutterBottom>
                {t('home.feature_save')}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {t('home.feature_save_description')}
              </Typography>
            </FeaturePaper>
          </Grid>
        </Grid>
      </Box>

      {/* Dodatkowa sekcja zachęcająca do akcji */}
      <Box mt={8} textAlign="center">
        <Typography variant="h4" fontWeight="bold" color="textPrimary" gutterBottom>
          {t('home.ready_to_cook')}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {t('home.join_community')}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleGetStarted}
          sx={{ mt: 2, backgroundColor: "#3f51b5", "&:hover": { backgroundColor: "#303f9f" } }}
        >
          {t('home.explore_recipes')}
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
