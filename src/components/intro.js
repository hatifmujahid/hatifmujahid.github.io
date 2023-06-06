import React from 'react';
import { Grid } from '@mui/material';
import mygif from '../images/hand.gif';
import mycat from '../images/y7.gif';
import './intro.css'
import emoji from 'react-easy-emoji'
import Stack from '@mui/material/Stack';

export default function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <h1>
          Hi there, I am Muhammad Hatif Mujahid
          <img src={mygif} width={'70px'} height={'70px'} alt="Hand GIF" />
        </h1>
        <h2>🚀A passionate Full Stack Developer🚀</h2>
        <h2>💡Have built web and mobile applications💡</h2>
        <h2>⚡React | Flutter | C++ | Python ⚡</h2>
        <h2>🌩Passsionately pursuing CyberSecurity🌩</h2>
      </div>
      <div className="intro-gif">
        <img src={mycat} alt="Cat" height={'100%'} width={'100%'}/>
      </div>
    </div>
  );
}
