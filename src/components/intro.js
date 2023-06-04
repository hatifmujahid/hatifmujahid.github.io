import React from 'react';
import { Grid } from '@mui/material';
import mygif from '../images/hand.gif';
import mycat from '../images/Cat.gif';
import './intro.css'

export default function Intro() {
  return (
    <Grid container spacing={50} alignItems="center">
      <Grid item>
        <div style={{ marginLeft: '10%' }}>
          <h1>
            Hi there, I am Muhammad Hatif Mujahid
            <img src={mygif} width={'70px'} height={'70px'} alt="Hand GIF" />
          </h1>
          <h2>A passionate Full Stack Software Developer 🚀</h2>
          <h2>having an experience of building Web and Mobile applications</h2>
          <h2>with JavaScript / Reactjs / Nodejs / React Native</h2>
          <h2>and some other cool libraries and frameworks.</h2>
        </div>
      </Grid>
      <Grid item>
        <img src={mycat} alt="Cat" height={'50%'} width={'50%'} style={{marginTop:'30px'}}/>
      </Grid>
    </Grid>
  );
}
