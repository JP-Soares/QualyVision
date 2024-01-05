import React from "react"

import Header from './header.js'
import Quemsomos from './quemsomos.js'
import Drfabio from './drfabio.js'
import Localizacao from './localizacao.js'

export default function generalContent(){
    return(
        <section>
            <Header />
            <Quemsomos />
            <Drfabio />
            <Localizacao />
        </section>
    );
}