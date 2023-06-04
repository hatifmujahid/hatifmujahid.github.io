import React from 'react';
import './intro.css'
import mygif from '../images/hand.gif'

export default function Intro() {
    return(
        <div style={{marginLeft:'10%'}}>
            <h1 style={{fontWeight:'lighter'}}>Hi there, I am Muhammad Hatif Mujahid<img src={mygif} width={'70px'} height={'70px'} ></img></h1>
            <h2>A passionate Full Stack Software Developer 🚀 </h2>
            <h2>having an experience of building Web and Mobile applications</h2>
            <h2>with JavaScript / Reactjs / Nodejs / React Native</h2>
            <h2>and some other cool libraries and frameworks.</h2>
        </div>
    );
}