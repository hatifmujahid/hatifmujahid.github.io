import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import EmailButton from './emailButton';
import Grid from '@mui/material/Grid';
import Links from './links';
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate, Navigate, Link } from 'react-router-dom';
import Projects from './Projects';
import Image from './image';
import Intro from './intro';
import Navbar from './Navbar';
import MyComponent from './resume';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Projects');
  };

  return (
    <Box>
      <Navbar />
      <Intro />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link to="/Projects" style={{ textDecoration: 'none' }}>
          <Button
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
              marginRight: '10px',
              fontSize: '20px',
              fontWeight: 'lighter',
            }}
          >
            Projects
          </Button>
        </Link>
        <MyComponent />
      </div>
    </Box>
  );
}
