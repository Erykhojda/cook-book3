import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GoogleButton from "./GoogleButton";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        background: "#333",
        color: "#fff",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
          }}
        >
          Recipe
        </Typography>

        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleDrawer}
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            alignItems: "center",
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#64B5F6" : "inherit",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            {t('navbar.home')}
          </NavLink>
          <NavLink
            to="/createRecipe"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#64B5F6" : "inherit",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            {t('navbar.createRecipe')}
          </NavLink>
          <NavLink
            to="/recipes"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#64B5F6" : "inherit",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            {t('navbar.recipes')}
          </NavLink>
          <GoogleButton />
        </Box>
      </Toolbar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "50%",
            backgroundColor: "#333",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
          }}
        >
          <Typography variant="h6">{t('navbar.menu')}</Typography>
          <IconButton onClick={toggleDrawer} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/" onClick={toggleDrawer}>
              <ListItemText
                primary={t('navbar.home')}
                sx={{
                  textAlign: "center",
                  color: ({ isActive }) => (isActive ? "#64B5F6" : "#fff"),
                  fontWeight: ({ isActive }) => (isActive ? "bold" : "normal"),
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/createRecipe" onClick={toggleDrawer}>
              <ListItemText
                primary={t('navbar.createRecipe')}
                sx={{
                  textAlign: "center",
                  color: ({ isActive }) => (isActive ? "#64B5F6" : "#fff"),
                  fontWeight: ({ isActive }) => (isActive ? "bold" : "normal"),
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/recipes" onClick={toggleDrawer}>
              <ListItemText
                primary={t('navbar.recipes')}
                sx={{
                  textAlign: "center",
                  color: ({ isActive }) => (isActive ? "#64B5F6" : "#fff"),
                  fontWeight: ({ isActive }) => (isActive ? "bold" : "normal"),
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ justifyContent: "center" }}>
            <GoogleButton />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
