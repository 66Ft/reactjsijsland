import { Grid, Typography, IconButton } from '@mui/material';
import { Flag, House, School, KeyboardArrowUp } from '@mui/icons-material';
import React from 'react';


function Footer() {
  let datum = new Date();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex"
      sx={{ height: '10vh', width: '100vw' }}
    >
      <Grid item>
        <Typography variant="h6" gutterBottom sx={{ color: '000' }}>
          Copyright {datum.getFullYear()} Ties Velthuis
        </Typography>
        <Typography>
          <Flag></Flag>Nederland
        </Typography>
        <Typography>
          <House></House>Apeldoorn
        </Typography>
        <Typography>
          <School></School> Walterbosch
        </Typography>
        {/* Back to top button */}
        <IconButton onClick={scrollToTop} sx={{ color: 'primary.main' }}>
          <KeyboardArrowUp />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Footer;
