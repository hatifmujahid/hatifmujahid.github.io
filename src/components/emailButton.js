import React from 'react';
import { EmailOutlined } from '@mui/icons-material';
import { Fab, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import './emailButton.css';
import logo from '../images/logo.png';

export default function EmailButton() {
  return (
    <Grid container
      spacing={2}
      style={{ marginLeft: '10%', marginRight: '10%' }}
      alignContent={'center'}
      alignItems={'center'}
>
      <Grid item>
        <img src={logo} alt="email" width={'200px'} height={'120px'} />
      </Grid>
      <Grid item>
        <Button
          href="https://www.linkedin.com/in/muhammad-hatif"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#808080' }}
          onMouseEnter={(e) => (e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.color = '#808080')}
        >
          LinkedIn
        </Button>
        {' / '}
        <Button
          href="https://github.com/hatifmujahid"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#808080' }}
          onMouseEnter={(e) => (e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.color = '#808080')}
        >
          GitHub
        </Button>
      </Grid>
    </Grid>
  );
}
