import React from 'react';
import { IconButton, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';

export default function RoundedIcons() {
  return (
    <Box style={{ backgroundColor: '#808080', marginTop:'20px'}}>
      <IconButton style={{ color: '#000000', borderRadius: '50%', padding: '12px' }} href='https://github.com/hatifmujahid'>
        <GitHubIcon style={{ fontSize: '40px' }} />
      </IconButton>
      <IconButton href='https://www.facebook.com/HMHM08' style={{ color: '#3b5998', borderRadius: '50%', padding: '12px' }}>
        <FacebookIcon style={{ fontSize: '40px' }} />
      </IconButton>
      <IconButton style={{ color: '#1DA1F2', borderRadius: '50%', padding: '12px' }}>
        <TwitterIcon style={{ fontSize: '40px' }} />
      </IconButton>
      <IconButton href='mailto:hatifmujahid08@gmail.com' style={{ color: '#D44638', borderRadius: '50%', padding: '12px' }}>
        <MailIcon style={{ fontSize: '40px' }} />
      </IconButton>
    </Box>
  );
}
