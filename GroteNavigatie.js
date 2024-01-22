import React from 'react'
import { AppBar, Toolbar, Box, IconButton, Tab, Grid, Button, Tabs} from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/Home';
import { cardData } from "../../data/data.js";
import {Link} from "react-router-dom"


function GroteNavigatie() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
            <Toolbar>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
              <IconButton aria-label="home" component={Link} to="/">
                <HomeRoundedIcon fontSize="large" />
              </IconButton>
                <Tabs>
                  <Tab value="1" label={cardData[0].titel} component={Link} to="/detail/1"/>
                  <Tab value="2" label={cardData[1].titel} component={Link} to="/detail/2"/>
                  <Tab value="3" label={cardData[2].titel} component={Link} to="/detail/3"/>
                  <Tab value="4" label={cardData[3].titel} component={Link} to="/detail/4"/>
                  <Tab value="5" label={cardData[4].titel} component={Link} to="/detail/5"/>
                  <Tab value="6" label={cardData[5].titel} component={Link} to="/detail/6"/>
                </Tabs>
                <Button variant='contained'>Login knoppie</Button>
              </Grid>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default GroteNavigatie