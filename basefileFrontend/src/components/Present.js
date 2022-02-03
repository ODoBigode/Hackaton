import React, { useState } from "react";
import styles from "./styles/main.module.css";

export function RenderPortfolio() {
    // portfolio goes here
    return (
        <div className={styles.box}>
            <img className={styles.photo} src="imagens/1_onda_musical.jpg" alt="coisas"></img>
        </div>
    )
}

export function RenderHighlights() {
    // highlights goes here 
    return (
        <div>
            blalb
        </div>
    ) 
}

export function RenderAbout() {
    // about me goes here
    return (
        <div>
            blablabla
        </div>
    )
}


