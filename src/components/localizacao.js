import React from 'react';
import {Container} from './styles/styledcontainer.js'
import { Containercontenttitle } from './styles/styledcontainer.js';

export default function localizacao(){
    return(
        <Container>
            <Containercontenttitle>
                <p>Nossa Localização</p>
            </Containercontenttitle>
            <div>
                <p>Texto</p>
            </div>
        </Container>
    );
}