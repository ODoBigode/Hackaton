import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserEnter } from "./LoginSignup";
import { RenderAbout, RenderHighlights, RenderPortfolio } from "./Present";
import style from "./styles/main.module.css";



export function Render() {
    const [isLogging, setIslogging] = useState(false)
    const [log, setLog] = useState(false)
    let navigate = useNavigate();

    return (
        <div className={style.main}>

            <div className={style.menu}>
                <div className={style.top}>
                   { !isLogging ? <button  className={style.log} onClick={() => setIslogging(!isLogging)}>Log in/Sign Up</button> : <button className={style.log} onClick={() => setIslogging(!isLogging)}>Log Out</button>}
                </div>
                <div className={style.mid}>
                    <p className={style.rec}>RECICLARTE</p>
                    <img src="/styles/fabio.jpg" className={style.fabio} alt="O mitico Fabio"/>
                    <button className={style.switch} onClick={() => navigate('/portfolio')}>Portfolio</button>
                    <button className={style.switch} onClick={() => navigate('/highlights')}>Highlights</button>
                    <button className={style.switch} onClick={() => navigate('/about')}>About me</button>
                </div>
            </div>
            <div className={style.pages}>
                <Routes>
                    {isLogging ? <Route path='/user' element={<UserEnter />} /> : <Route path='/portfolio' element={<RenderPortfolio />} />}
                    {isLogging ? <Route path='/user' element={<UserEnter />} /> : <Route path='/highlights' element={<RenderHighlights />} />}
                    {isLogging ? <Route path='/user' element={<UserEnter />} /> : <Route path='/about' element={<RenderAbout />} />} 
                </Routes>
            </div>
        </div>       
    )
}