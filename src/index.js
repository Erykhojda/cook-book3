import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import RecipesList from "./pages/RecipeList/RecipesList";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import './i18n';

import { CartProvider } from "./CartContext";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "95vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1A237E 30%, #1976D2 70%, #64B5F6 100%)",
          color: "#fff",
          padding: "20px",
        }}
      >
        <Outlet />
      </Box >
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "createRecipe",
        element: <CreateRecipe />,
      },
      {
        path: "recipes",
        element: <RecipesList />,
      },
      {
        path: "recipes/:id",
        element: <RecipeDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
