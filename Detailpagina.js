import React from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../../data/data';
import ContentWrap from '../Content/ContentWrap';
import { Typography, Box } from '@mui/material';

function Detailpagina() {
  let { id } = useParams();
  let juisteKaart = cardData[id - 1];

  const bannerStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    backgroundImage: `url(${juisteKaart.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  };

  return (
    <div>
      <Box sx={bannerStyle}>
        <Typography variant="h1" component="h1" sx={textStyle}>
          {juisteKaart.titel}
        </Typography>
      </Box>

      <ContentWrap
        image={juisteKaart.image}
        alt={juisteKaart.alt}
        titel={juisteKaart.titel}
        langetekst={juisteKaart.langetekst}
      />
    </div>
  );
}

export default Detailpagina;
