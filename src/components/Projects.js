import React from 'react';
import { Stack } from '@mui/material';
import Navbar from '../assets/Navbar';
import './projects.css';
import { useEffect } from "react";

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
  return (
    <div>
      <h1 className="heading">Projects</h1>
      <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
      <div className="card">
        <p>Inventory Management System</p>  
      </div>    
      <div className="card">
        <p>Spam Email Classifier</p>  
      </div>    
      <div className="card">
        <p>Pwned Passwords</p>  
      </div>  
      </Stack>  
      <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
        <div className="card">
          <p>Weather App</p>  
        </div>    
        <div className="card">
          <p>Anime Reviews</p>  
        </div>    
        <div className="card">
          <p>Portfolio Website</p>  
        </div>  
      </Stack>    
    </div>
  );
}
{/* <Stack flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={'20px'} > */}
{/* <Stack flexDirection={'row'}>
        <a href="https://github.com/hatifmujahid/DS-Project.cpp" style={{ textDecoration: 'none' }}>
          <img src="https://github-readme-stats-ashy-ten-42.vercel.app/api/pin/?username=hatifmujahid&repo=DS-Project.cpp&theme=dark" style={{ margin: '20px', transition: 'box-shadow 0.3s' }} />
        </a>

        <a href="https://github.com/hatifmujahid/Airline-Ticket_Reservation" style={{ textDecoration: 'none' }}>
          <img src="https://github-readme-stats-ashy-ten-42.vercel.app/api/pin/?username=hatifmujahid&repo=Airline-Ticket_Reservation&theme=dark" style={{ margin: '20px', transition: 'box-shadow 0.3s' }} />
        </a>

        <a href="https://github.com/hatifmujahid/Inventory-Management-System-PERN" style={{ textDecoration: 'none' }}>
          <img src="https://github-readme-stats-ashy-ten-42.vercel.app/api/pin/?username=hatifmujahid&repo=Inventory-Management-System-PERN&theme=dark" style={{ margin: '20px', transition: 'box-shadow 0.3s' }} />
        </a>

        </Stack>
        <Stack flexDirection={'row'}>
        <a href="https://github.com/hatifmujahid/Spam-Mail-Classification">
          <img src="https://github-readme-stats-ashy-ten-42.vercel.app/api/pin/?username=hatifmujahid&repo=Spam-Mail-Classification&theme=dark" style={{ margin: '20px', transition: 'box-shadow 0.3s' }} />
        </a>

        <a href="https://github.com/hatifmujahid/anime-reviews">
          <img src="https://github-readme-stats-ashy-ten-42.vercel.app/api/pin/?username=hatifmujahid&repo=anime-reviews&theme=dark" style={{ margin: '20px', transition: 'box-shadow 0.3s' }} />
        </a>

        <a href="https://github.com/hatifmujahid/hatifmujahid.github.io">
          <img src="https://github-readme-stats-ashy-ten-42.vercel.app/api/pin/?username=hatifmujahid&repo=hatifmujahid.github.io&theme=dark" style={{ margin: '20px', transition: 'box-shadow 0.3s' }} />
        </a>


        </Stack> */}
      {/* </Stack>   */}