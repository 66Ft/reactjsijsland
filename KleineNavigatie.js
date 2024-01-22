import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'; 
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { WiSnowflakeCold, WiVolcano, WiTsunami } from "react-icons/wi";
import { BiBody } from "react-icons/bi"
import { MdOutlineFoodBank } from "react-icons/md";
import { FaMountainCity } from "react-icons/fa6";


function KleineNavigatie() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar>
      <Toolbar>
        <IconButton aria-label='drawerButton' onClick={() => setDrawerOpen(true)}>
          <MenuRoundedIcon fontSize='large' />
        </IconButton>
      </Toolbar>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItem button component={Link} to='/'>
            <ListItemIcon><HomeRoundedIcon fontSize='large' /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button component={Link} to='/detail/1'>
            <ListItemIcon><WiSnowflakeCold fontSize={'3rem'} /></ListItemIcon>
            <ListItemText>Gletsjers</ListItemText>
          </ListItem>
          <ListItem button component={Link} to='/detail/2'>
            <ListItemIcon><WiVolcano fontSize={'3rem'} /></ListItemIcon>
            <ListItemText>De Grímsvötn</ListItemText>
          </ListItem>
          <ListItem button component={Link} to='/detail/3'>
            <ListItemIcon><WiTsunami fontSize={'3rem'} /></ListItemIcon>
            <ListItemText>Watervallen</ListItemText>
          </ListItem>
          <ListItem button component={Link} to='/detail/4'>
            <ListItemIcon><MdOutlineFoodBank fontSize={'3rem'} /></ListItemIcon>
            <ListItemText>Eten</ListItemText>
          </ListItem>
          <ListItem button component={Link} to='/detail/5'>
            <ListItemIcon><FaMountainCity  fontSize={'3rem'} /></ListItemIcon>
            <ListItemText>Reykjavik</ListItemText>
          </ListItem>
          <ListItem button component={Link} to='/detail/6'>
            <ListItemIcon><BiBody fontSize={'3rem'} /></ListItemIcon>
            <ListItemText>Inwoners</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default KleineNavigatie;
