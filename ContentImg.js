import { Box } from '@mui/material'
import React from 'react'
import { Image } from 'mui-image'

function ContentImg(props) {
  return (
    <Box sx={{width:{xs:"100%", sm:"100%", md:"30vw"}}}>
        <Image src={props.image} alt={props.alt} /> 
    </Box>
  )
}

export default ContentImg