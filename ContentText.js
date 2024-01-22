import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function ContentText(props) {
  return (
    <Paper elevation={3} sx={{textAlign: "left", p:"40px", maxWidth:"500px"}}>
        <Typography variant='h5'>{props.titel}</Typography>
        <Typography variant='body'>{props.langetekst}</Typography>
        <br />
        <Button variant='outlined' size='small' sx={{mt:'10px'}} component={Link} to="/">Terug naar homepagina</Button> 
    </Paper>
  )
}

export default ContentText