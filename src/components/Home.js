import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate, Navigate, Link } from 'react-router-dom';
import Intro from './intro';
import Navbar from './Navbar';
import Resume from './resume';
import Stack from '@mui/material/Stack';
import Blogs from './blogs';
import Copyright from './footnote';
import myimg from '../images/IMG_9208.jpg';
import RoundedIcons from './socials';
import TechSkills from './tech';


export default function Home() {
  return (
    <Box>
      <Navbar />
      <Stack flexDirection={'column'}>
          <Intro />
          <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'} margin={'20px'}>
              <Link to="/Projects" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#f50057',
                    color: 'white',
                    height: '100px', 
                    width: '300px',
                    marginTop: '50px',
                    '&:hover': {
                      backgroundColor: '#ff4081',
                    },
                    '&:hover, &:focus': {
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    },
                    fontSize:'20px', fontWeight:'lighter'
                  }}
                >
                  Projects
                </Button>
              </Link>
              <Resume />
            </Stack>
			<Stack flexDirection={'column'}>
				<h1 id='blogs' style={{ textAlign: 'center',

						paddingBottom: '10px',
						marginLeft:'10%',
						marginRight:'10%'}}>
							Blogs</h1>
				<Blogs />
				
				<h1 id='contact-me' style={{ textAlign: 'center',

						paddingBottom: '10px',
						marginLeft:'10%',
						marginRight:'10%'}}>
							About Me</h1>
				<Stack flexDirection={{ xs: 'column', md: 'row' }} sx={{ display: 'flex' }}>
					<div style={{ marginLeft: '10%', marginRight: '30px'}}>
						<h2 style={{fontSize:'80px', color:'white'}}>Reach out to me</h2>
						<h2 style={{color:'white'}}>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</h2>
						<h2 style={{fontWeight:'bold', color:'white'}}>"Cyber Secuity Enthusiast| MERN stack Developer | Still Finding 💭 "</h2>
						<h2 style={{color:'white'}}>📍Karachi, Pakistan</h2>
						<h2 style={{color:'white'}}>Open for opportunities: YES</h2>
					</div>
					<img src={myimg} alt="myself" style={{ width: '400px', border: '5px solid teal', display: 'flex', marginLeft:'40px'}} />
				</Stack>
				<h2 style={{color:'white', marginLeft:'10%', marginRight:'10%',marginBottom:'10px', fontWeight:'bolder', fontSize:'50px'}}>Technologies I use</h2>
				<TechSkills/>
				<h2 style={{ textAlign: 'center', color:'white', marginLeft:'10%', marginRight:'10%'}}>Let's Connect</h2>
			</Stack>
        </Stack>
		<RoundedIcons />
		<Copyright />
    </Box>
  );
}