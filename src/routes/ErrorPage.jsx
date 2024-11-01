import { useRouteError } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation();
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      sx={{
        backgroundColor: "#f8f9fa",
        color: "#333",
        padding: "20px",
      }}
    >
      <Typography variant="h1" fontWeight="bold" color="primary" gutterBottom>
        {t('errorPage.title')}
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        {t('errorPage.description')}
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={2}>
        {error?.statusText || error?.message || t('errorPage.message')}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{ marginTop: 3 }}
      >
        {t('errorPage.go_home')}
      </Button>
    </Box>
  );
};

export default ErrorPage;
