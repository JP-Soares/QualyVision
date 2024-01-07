import React from 'react'
import {Container} from './styles/styledcontainer.js'
import { Containercontenttitle } from './styles/styledcontainer.js';

export default function quemSomos(){
    return(
        <Container>
            <Containercontenttitle>
                <p>Quem Somos?</p>
            </Containercontenttitle>
            <div>
                <p>Texto</p>
            </div>
        </Container>
    );
}