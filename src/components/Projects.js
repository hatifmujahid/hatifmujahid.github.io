import React from 'react';
import { Stack } from '@mui/material';
import ProjectCard from './Project_card';
import Navbar from './Navbar';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <Stack flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={'20px'} height={'75vh'}>
        <h1 style={{ textAlign: 'center', paddingBottom: '10px', backgroundColor: '', marginLeft:'10%', marginRight:'10%'}}>Projects</h1>
        <Stack flexDirection={'row'}>
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


        </Stack>
      </Stack>  
    </div>
  );
}
