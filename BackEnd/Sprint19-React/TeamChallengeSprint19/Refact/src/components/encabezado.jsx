import React from 'react';
import logo from '../assets/cocretainc.jpg';

function encabezado (){
    return(
        <header>
        <img src={logo} alt="Logo de Coquetas INC" style={{ height: '60px' }} />
        </header>
    );
}

export default encabezado ;
