import React, { useState } from "react";
import style from "./styles/main.module.css";

export function RenderPortfolio() {
    // portfolio goes here
    return (
        <div className={style.box}>
            <img className={style.photo} src="img/1_onda_musical.jpg" alt="coisas"></img> 
            <img className={style.photo} src="img/2_spider_crab.jpg" alt="coisas"></img> 
            <img className={style.photo} src="img/3_conjunto_pneus.webp" alt="coisas"></img> 
            <img className={style.photo} src="img/4_papagaio.webp" alt="coisas"></img> 
            <img className={style.photo} src="img/5_flowers.jpg" alt="coisas"></img> 
            <img className={style.photo} src="img/6_seahorse.jpg" alt="coisas"></img> 
            <img className={style.photo} src="img/7_bunny.jpg" alt="coisas"></img> 
            <img className={style.photo} src="img/8_barrel_seats.jpg" alt="coisas"></img> 
            <img className={style.photo} src="img/9_chameleon.jpg" alt="coisas"></img> 
            <img className={style.photo} src="img/10_garden.webp" alt="coisas"></img> 
            <img className={style.photo} src="img/11_frog.jpg" alt="coisas"></img> 
            cenas
        </div>
    )
}

export function RenderHighlights() {
    // highlights goes here 
    return (
        <div className={style.box}>
            
        </div>
    ) 
}

export function RenderAbout() {
    // about me goes here
    return (
        <div className={style.box}>
            <p className={style.about}>
            I am Fabio. My mother gave birth to me in the woods, 
            and after she died i was raised by wolves. I loved my wolf parents, 
            but they tragically died when they choked on trash at the beach. Ever since
            their death, i decided to start making art to raise awareness 
            to pollution in nature, by going to beaches on my van across the world
            and collecting trash to make my pieces.
            </p>
        </div>
    )
}


