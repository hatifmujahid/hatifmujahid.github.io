import React from 'react';
import { Stack } from '@mui/material';
import './projects.css';
import { useEffect } from "react";
import pwned from '../images/pwned.png';
import ivms from '../images/ivms.png';
import sudoku from '../images/sudoku.png';
import spam from '../images/spam.png';
import portfolio from '../images/portfolio.png';


const handleMouseOver = (e) => {
  const target = e.currentTarget;

  const rect = e.currentTarget.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};
export default function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    for (const card of cards) {
      card.addEventListener("mousemove", handleMouseOver);
    }

    return () => {
      for (const card of cards) {
        card.removeEventListener("mousemove", handleMouseOver);
      }
    };
  }, []);
  const handleclick = (e) => {
   
    if(e.target.innerText === 'Inventory Management System'){
      window.open(' https://github.com/hatifmujahid/DS-Project.cpp', '_blank');
    }
    else if(e.target.innerText === 'Spam Email Classifier'){
      window.open('https://github.com/hatifmujahid/Spam-Mail-Classification' , '_blank');

    }
    else if(e.target.innerText === 'Pwned Passwords'){
      window.open('https://github.com/hatifmujahid/Pwned-Passwords' , '_blank');

    }
    else if(e.target.innerText === 'Weather App'){
      window.open('https://weatherapp-nu-beryl.vercel.app', '_blank');

    }
    else if(e.target.innerText === 'Anime Reviews'){
      window.open('https://github.com/hatifmujahid/anime-reviews' , '_blank');
    }
    else if(e.target.innerText === 'Portfolio Website'){
      window.open('https://github.com/hatifmujahid/hatifmujahid.github.io' , '_blank');
    }
  }

  return (
    <div style={{marginTop:'200px'}} id='projects'>
      <h1 className="heading">Projects</h1>
      <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
      <div className="card" onClick={handleclick}>
        <img src={ivms} alt="" className="image" />
        <p>Inventory Management System</p>  
      </div>    
    <div className="card" onClick={handleclick}>
      <img src={spam} alt="" className="image" />
      <p>Spam Email Classifier</p>  
    </div>    
      <div className="card" onClick={handleclick} >
        <p>Airline Ticket Reservation</p>  
      </div>  
      </Stack>  
      <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
        <div className="card" onClick={handleclick}>
          <p>Weather App</p>  
        </div>    
        <div className="card" onClick={handleclick}>
          <p>Anime Reviews</p>  
        </div>    
        <div className="card" onClick={handleclick}>
          <img src={portfolio} alt="" className="image" />
          <p>Portfolio Website</p>  
        </div>  
      </Stack>
      <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
        <div className="card" onClick={handleclick}>
          <img className="image" src={pwned} alt="react" />
          <p>Pwned Password</p>  
        </div>    
        <div className="card" onClick={handleclick}>
          <p>Image Recognition</p>  
        </div> 
        <div className="card" onClick={handleclick}>
          <img src={sudoku} alt="" className="image" />
          <p>Sudoku Solver</p>  
        </div> 
      </Stack>   
    </div>
  );
}
