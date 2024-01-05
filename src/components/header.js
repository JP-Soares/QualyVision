import React from 'react'
import Logo from './img/logoNova/logoSemNome.png'

export default function header(){
    return(
        <header>
            <nav>
                <img src={Logo} />
                <p>Qualy Vision</p>
            </nav>
        </header>
    );
}