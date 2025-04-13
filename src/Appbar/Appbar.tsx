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

const navItems = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "CP Achievements", id: "cp" },
  { name: "Activities", id: "activities" },
  { name: "Contact", id: "contact" }
];

export default function Appbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the AppBar height (typically 64px)
      const appBarHeight = 64;
      
      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      
      // Calculate the current scroll position
      const offsetPosition = elementPosition + window.pageYOffset - appBarHeight;
      
      // Scroll to the element with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Close the mobile drawer
      setMobileOpen(false);
    }
  };

  const drawerContent = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, cursor: "pointer", color: "#2b2b2b" }} onClick={() => scrollToSection("about")}>
        Mahim
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item.id)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="fixed">
        <Toolbar className={styles.appbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#2b2b2b" }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography
              variant="h5"
              component="div"
              className={styles.logo}
              sx={{ 
                flexGrow: 1, 
                display: { xs: "none", sm: "block" }, 
                cursor: "pointer",
                fontSize: { xs: "1.2rem", sm: "1.5rem" }
              }}
              onClick={() => scrollToSection("about")}
            >
              Mahim
            </Typography>
          </Box>

          <Box
            sx={{ 
              display: { xs: "none", sm: "block" },
              marginLeft: "auto"
            }}
            className={styles.list}
          >
            {navItems.map((item) => (
              <ButtonBase 
                key={item.name} 
                className={styles.listItem} 
                disableRipple
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </ButtonBase>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { 
            boxSizing: "border-box", 
            width: "80%",
            maxWidth: "300px"
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
