import React from 'react';
import { Grid } from '@mui/material';
import mygif from '../images/hand.gif';
import mycat from '../images/y7.gif';
import './intro.css'
import emoji from 'react-easy-emoji'
import Stack from '@mui/material/Stack';

export default function Intro() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  function handleMouseover(event){
    let iteration = 0;

    let interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("")
      .map((letter,index) =>{
        if(index < iteration){
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
      iteration += 1 / 4;
      if(iteration > event.target.dataset.value.length){
        clearInterval(interval);
      }
    }, 20);
  };

  return (
    <div className="intro-container">
      <div className="intro-text">
        <h1 onMouseOver={handleMouseover} data-value="Hi there,I am Muhammad Hatif Mujahid">Hi there,I am Muhammad Hatif Mujahid
        </h1>
        
        <h2><span className='magic'>A passionate Full Stack Developer</span></h2>
        <h2><span className='magic'>Have built web and mobile applications</span></h2>
        <h2><span className='magic'>React | Flutter | C++ | Python </span></h2>
        <h2><span className='magic'>Passsionately pursuing CyberSecurity</span></h2>
      </div>
      <div className="intro-gif">
        <img src={mycat} alt="Cat" height={'100%'} width={'100%'}/>
      </div>
    </div>
  );
}
