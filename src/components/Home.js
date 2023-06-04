import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import EmailButton from './emailButton';
import Grid from '@mui/material/Grid';
import Links from './links';
import Button from '@mui/material/Button';
import {Routes, Route, useNavigate, Navigate, Link} from 'react-router-dom';
import Projects from './Projects';
import Image from './image';
import Intro from './intro';
import Navbar from './Navbar';

export default function Home() {
	const navigate = useNavigate();

	const handleClick = () =>{
		navigate('/Projects');
	}

	return (
		<Box sx={{ flexGrow: 1, backgroundColor:'#161616'}} height={'100%'} width={'100%'}>
			<Navbar	/>
			<Intro />
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<Link to="/Projects" style={{ textDecoration: 'none' }}>
					<Button sx={{ backgroundColor: '#1a1a1a', height: '100px', width: '300px', marginTop: '50px', color:'#808080', fontSize:'20px', fontWeight:'lighter'}}>
						Projects
					</Button>
				</Link>
			</div>
			
		
		</Box>
	);
}