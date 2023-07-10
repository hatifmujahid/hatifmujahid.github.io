import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Intro from './intro';
import Navbar from '../assets/Navbar';
import Resume from './resume';
import Stack from '@mui/material/Stack';
import Blogs from './blogs';
import Copyright from '../assets/footnote';
import myimg from '../images/IMG_9208.jpg';
import RoundedIcons from './socials';
import TechSkills from './tech';
import './Home.css';
import Sphere from '../assets/3dSphere';
import Project from './Projects';
import { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';



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

  

  return (
    <Box>
      <Navbar />
      <div>
        
      </div>
      <Stack flexDirection={'column'} >
          <Intro />
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Resume />
          </div>
            <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
              <div onClick={handleClick} style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'30px'}}>
                <Sphere />
              </div>
              {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
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

      <Project />
			<Stack flexDirection={'column'}>
      <div style={{height:'100vh', width:'100vw'}}>
				<Blogs />
      </div>
				<h1 id='contact-me' style={{ textAlign: 'center',

						paddingBottom: '10px',
						marginLeft:'10%',
						marginRight:'10%'}}>
							About Me</h1>
				<Stack flexDirection={{ xs: 'column', md: 'row' }} sx={{ display: 'flex' }}>
        <div style={{ marginLeft: '10%', marginRight: '30px'}}>
						<div className="text">
              <div className="line">
                <p className="word">Email</p>
                <p className="word">Social</p>
              </div>
              <div className="line">
                <p className="word">A</p>
                <p className="word">Developer</p>
              </div>
              <div className="line">
                <p className="word">@</p>
                <p className="word">FAST NUCES</p>
              </div>
              <div className="line">
                <p className="word">&</p>
                <p className="word">Problem Solver</p>
              </div>
            </div>
					</div>
				</Stack>
				
				<h2 style={{ textAlign: 'center', color:'white', marginLeft:'10%', marginRight:'10%'}}>Let's Connect</h2>
			</Stack>
        </Stack>
		<RoundedIcons />
		<Copyright />
    </Box>
  );
}