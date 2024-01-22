import { Grid, Box } from '@mui/material'
import React from 'react'
import ContentImg from './ContentImg'
import ContentText from './ContentText'


function ContentWrap(props) {
  return (
    
    <Grid
     container 
    direction="row" 
    justifyContent="space-evenly" 
    alignItems="stretch" 
    sx={{marginY:"10vh"}}
    >

        <ContentImg image={props.image} alt={props.alt} />
        <ContentText titel={props.titel} langetekst={props.langetekst} />

    </Grid>

    

  )
}

export default ContentWrap