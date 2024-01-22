import React from 'react'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import errorVideo from "../../components/video/error.mp4";


function Foutepagina() {
  return (
    <div>
        <Typography variant='h1'sx={{marginTop:"100px", color: '#FF0000'}}>Deze pagina is niet gevonden </Typography>
        <video autoPlay loop muted id="video" className="video" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0, zIndex: -1 }}>
        <source src={errorVideo} type="video/mp4" />
        Uw browser ondersteunt de videotag niet.
      </video>
      <Link to="/">
        <Button variant='contained' style={{ fontSize: '1.5em', padding: '15px 30px' }}>
          Ga terug naar de homepagina
        </Button>
      </Link>
    </div>
  )
}

export default Foutepagina