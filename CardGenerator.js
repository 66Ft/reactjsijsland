import React from 'react';
import { Button, Card, CardMedia, Typography, CardActions, CardContent } from "@mui/material";
import { Link } from 'react-router-dom';

function CardGenerator({image,alt,titel,body, externalLink, internalLink}) {
  return (
    <Card>
        <CardMedia image={image} component="img" height="300" alt={alt}/>
        <CardContent sx={{textAlign:"left"}}>
            <Typography variant="h5">
            {titel}
            </Typography>
            <Typography variant="body2">
            {body}
            </Typography>
        </CardContent>
        <CardActions> 
            <Button color="primary" href={externalLink} target="_blank">Wikipedia</Button>
            <Link to={internalLink}>
                <Button color="primary" component={Link} to={internalLink}>Meer info</Button>
            </Link>
        </CardActions>
    </Card>
)
}

export default CardGenerator