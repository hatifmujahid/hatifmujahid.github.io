import React from 'react';
import { EmailOutlined } from '@mui/icons-material';
import { Fab, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import './emailButton.css';

export default function EmailButton() {
  return (
    <Grid container
      spacing={2}
      style={{ marginLeft: '10%', marginRight: '10%' }}
      alignContent={'center'}
      alignItems={'center'}
>
      <Grid item>
        <Fab
          disabled
          sx={{
            backgroundColor: '#161616',
            outlineColor: '#808080',
            outlineWidth: '10px',
            height: '80px',
            width: '80px',
            display: 'flex',
            marginBottom: '20px',
            marginTop: '20px',
          }}
        >
          <EmailOutlined
            disabled
            sx={{
              backgroundColor: '#161616',
              color: '#FFFFFF',
              borderRadius: 28,
              height: '30px',
              width: '30px',
            }}
          />
        </Fab>
      </Grid>
      <Grid item>
        <Button
          href="mailto:hatifmujahid08@gmail.com"
          style={{ color: '#808080' }}
          onMouseEnter={(e) => (e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.color = '#808080')}
        >
          Get In Touch
        </Button>
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
