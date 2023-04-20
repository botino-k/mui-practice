//rafce -fast command to create arrow function
import React from "react";
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import navbarListItem from "../const/navbarListItems"
import { navbarStyles } from "./styles"

const Navbar = () => {
  return <Drawer
    sx={navbarStyles.drawer}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
      {navbarListItem.map((item) => (
        <ListItem key={item.id} disablePadding >
          <ListItemButton
          >
            <ListItemIcon sx={navbarStyles.icons}>
              {item.icon}
            </ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>;
};

export default Navbar;