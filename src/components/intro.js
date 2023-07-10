import React from 'react';
import './intro.css'


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
      iteration += 1;
      if(iteration > event.target.dataset.value.length){
        clearInterval(interval);
      }
    }, 20);
  };

  return (
    <div className="intro-container">
      <div className="intro-text">
        <h1 style={{fontSize:'100px'}} onMouseOver={handleMouseover} data-value="Hi there, I am Hatif Mujahid">Hi there,
        I am <span className='name'>Hatif Mujahid</span>
        </h1>
        
        <h2><span className='magic'>MERN Full Stack Developer</span></h2>
        <h2><span className='magic'>Building web and mobile applications with love </span></h2>
        <h2><span className='magic'>React | Flutter | C++ | Python | Express.js | Node.js</span></h2>
        <h2><span className='magic'>Passsionately pursuing CyberSecurity</span></h2>
      </div>
      
    </div>
  );
}
