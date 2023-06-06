// import React from 'react';
// import { IconButton, Box } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import MailIcon from '@mui/icons-material/Mail';


import React from 'react';
import { Button } from '@mui/material';

export default function SquareButtons() {
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '10%', marginTop:'10px' }}>
        <Button
          style={{ color: '#808080', width:'200px'}}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'red', e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '', e.target.style.color = '#808080')}
          href='#blogs'
        >
          Blogs
        </Button>
        <Button
          style={{ color: '#808080', width:'200px'}}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'red', e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '',e.target.style.color = '#808080')}
          href='#contact-me'
        >
          About Me
        </Button>
      </div>
    );
  }
  





// export default function RoundedIcons() {
//   return (
//     <Box>
//       <IconButton style={{ color: '#000000', borderRadius: '50%', padding: '12px' }}>
//         <GitHubIcon style={{ fontSize: '24px' }} />
//       </IconButton>
//       <IconButton style={{ color: '#3b5998', borderRadius: '50%', padding: '12px' }}>
//         <FacebookIcon style={{ fontSize: '24px' }} />
//       </IconButton>
//       <IconButton style={{ color: '#1DA1F2', borderRadius: '50%', padding: '12px' }}>
//         <TwitterIcon style={{ fontSize: '24px' }} />
//       </IconButton>
//       <IconButton style={{ color: '#D44638', borderRadius: '50%', padding: '12px' }}>
//         <MailIcon style={{ fontSize: '24px' }} />
//       </IconButton>
//     </Box>
//   );
// }
