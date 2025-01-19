"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  ButtonBase,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./Appbar.module.css";

const navItems = ["Home", "About", "Publications", "Contact"];

export default function Appbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Mahim
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Custom gray shadow
        }}
      >
        <Toolbar className={styles.appbar}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <a>
              <Typography
                variant="h5"
                component="div"
                className={styles.logo}
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Mahim
              </Typography>
            </a>
          </Box>

          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            className={styles.list}
          >
            {navItems.map((item) => (
              <ButtonBase key={item} className={styles.listItem} disableRipple>
                {item}
              </ButtonBase>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 400 },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
