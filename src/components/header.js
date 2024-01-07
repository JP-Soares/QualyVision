import React from 'react'
import Logo from './img/logoNova/logoSemNomeBG.png'
import {AreaHeader} from './styles/styledheader.js'

export default function header(){
    return(
        <AreaHeader>
            <nav>
                <img src={Logo} id="logo" />
                <p id="title">Qualy Vision</p>
            </nav>
        </AreaHeader>
    );
}