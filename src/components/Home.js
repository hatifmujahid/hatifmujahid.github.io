import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Intro from './intro';
import Navbar from '../assets/Navbar';
import Resume from './resume';
import Stack from '@mui/material/Stack';
import Certifications from './certifications';
import Copyright from '../assets/footnote';
import RoundedIcons from './socials';
import './Home.css';
import Sphere from '../assets/3dSphere';
import Project from './Projects';
import { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Tech from './tech';
import AboutMe from './AboutMe';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';



export default function Home() {
  const [randomQuote, setRandomQuote] = useState('');
  const handleClick = async () => {
    try {
      const response = await axios.get('https://type.fit/api/quotes');
      const randomIndex = Math.floor(Math.random() * response.data.length);
      setRandomQuote(response.data[randomIndex].text);
    } catch (error) {
      console.log('Error fetching quote:', error);
    }
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

 const [isVisible, setVisible] = React.useState(false);
  React.useEffect(() => {
    setVisible(true);
  }, []);
  
  

  return (
    <Box>
      <Navbar />
      <div className={`intro-part ${isVisible ? 'visible' : ''}`} style={{width:'100vw', height:'100vh'}}>
          <Intro />
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          </div>
            <Stack flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
              <div onClick={handleClick} style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'30px'}} title='Press me! :)'>
                <Sphere />
              </div>
            <Resume />
			<a href="#contact-me" style={{textDecoration:'none', color:'white'}}>
            <div className="arrow-wrapper">
					<ArrowCircleDownIcon
					color="white"
					className="arrow-icon"
					sx={{  marginTop:'10px', width: '50px', height: '50px', '&:hover': { color: '#f50057' } }}
					/>
				</div>
            </a>
              <div className="dialog">
                <Dialog open={open} onClose={handleClose} classes={{ paper: 'dialog-paper' }} >
                  <DialogTitle><h1 className='quote-heading'>Random Quote</h1></DialogTitle>
                  <DialogContent>
                    <DialogContentText><p className='quote-text'>{randomQuote}</p></DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Stack>
            

      </div>
          <div className='about-part'>
            <h1 id='contact-me' style={{ textAlign: 'center',marginTop:'50px'}}>About Me</h1>
            <Stack flexDirection={{ xs: 'column', md: 'row' }} sx={{ display: 'flex' }}>
              <div style={{display:'grid',alignContent:'center', justifyContent:'center', width:'100vw', height:'100vh'}}>
                <AboutMe />
              </div>
            </Stack>
          </div>
          <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
            <Project />
          </Stack>
          <Stack flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
			<h1 style={{ textAlign: 'center',marginTop:'50px'}}>Certifications</h1>
            <Certifications />
          </Stack>
          <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
            <Tech />
          </Stack>

        

		<RoundedIcons />
		<Copyright />
    </Box>
  );
}