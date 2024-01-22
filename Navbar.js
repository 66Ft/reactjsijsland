import React from 'react'
import { useMediaQuery } from '@mui/material';
import KleineNavigatie from './KleineNavigatie';
import GroteNavigatie from './GroteNavigatie';

function Navbar() {

    const grootScherm = useMediaQuery('(min-width:700px)');

    if(grootScherm) {
        return (
            < GroteNavigatie />
        )
    } else {
        return (
            < KleineNavigatie />
        )
    }
}

export default Navbar