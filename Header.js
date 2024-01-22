import { Grid, Typography } from '@mui/material';
import React from 'react';
import backgroundVideo from "../../components/video/ijslandvideo.mp4";

function Header() {
  return (
    <Grid 
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <video autoPlay loop muted id="video" className="video" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}>
        <source src={backgroundVideo} type="video/mp4" />
        Uw browser ondersteunt de videotag niet.
      </video>
      
      <Grid item sx={{zIndex: 1}}>
        <Typography variant="h1" gutterBottom sx={{ color: "#FFFFFF", textShadow: "0 0 20px #000", fontSize: { xs: "3rem", sm: "4rem", md: "6rem" } }}>
          IJsland
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Header;
