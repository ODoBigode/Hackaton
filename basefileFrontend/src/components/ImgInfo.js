import React, { useState } from "react";
import style from "./styles/main.module.css";
import { BrowserRouter, useNavigate, useParams } from "react-router-dom";

export function Info() {
    
    let params = useParams()
    if (params.id === '1_onda_musical') {
        return(
            <div className={style.box}>
                <img className={style.photo} src={`/img/${params.id}.jpg`} alt="coisas"></img>
                <p>Musical wave</p>
                <p>descrição</p>
                <p>current bid: 750€</p>
                <input type='number' placeholder="make a bid"></input>
            </div>
        )
    } else if (params.id === '2_spider_crab') {
        return (
            <div className={style.box}>
                <img className={style.photo} src={`/img/${params.id}.jpg`} alt="coisas"></img>
                <p>Spider Crab</p>
                <p>descrição</p>
                <p>current bid: 50€</p>
                <input type='number' placeholder="make a bid"></input>
            </div>
        )
    } else if (params.id === '6_seahorse') {
        return (
            <div className={style.box}>
                <img className={style.photo} src={`/img/${params.id}.jpg`} alt="coisas"></img>
                <p>Sea Horse</p>
                <p>descrição</p>
                <p>current bid: 1050€</p>
                <input type='number' placeholder="make a bid"></input>
            </div>
        )
    }
    return (
    <div className={style.box}>
        
        <img className={style.photo} src={`/img/${params.id}.jpg`} alt="coisas"></img>
        
        
        <p>Onda Musical</p>
        <p>descrição</p>
        <p>current bid: 500€</p>
        <input type='number' placeholder="make a bid"></input>
    </div>
    )
}
