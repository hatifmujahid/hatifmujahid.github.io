import React from 'react';
import { EmailOutlined } from '@mui/icons-material';
import { Fab, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import './emailButton.css'

export default function EmailButton(){
    return(
        <Grid container spacing={2} alignItems="center" marginLeft={'70%'}>
            <Grid item>
                <Fab disabled sx={{backgroundColor:'#161616', outlineColor:'#808080', outlineWidth:'10px',height:'80px',width:'80px', display:'flex', marginLeft:'15%',marginBottom:'20px', marginTop:'20px'}}>
                    <EmailOutlined disabled sx={{backgroundColor:'#161616',color:'#FFFFFF',borderRadius:28, height:'30px', width:'30px'}}/>
                </Fab>
            </Grid>
            <Grid item>
                        <a
                href={"mailto:hatifmujahid08@gmail.com"}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#808080')}
                >
                Get In Touch
                </a>
            </Grid>
        </Grid>
    );
}
