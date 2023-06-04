import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)(({ theme }) => ({
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
}));

export default function MyComponent() {
  return (
    <StyledButton
      component={Link}
      to="https://drive.google.com/file/d/1-yO3isAFhd3J8GV_eWawnuswEvRnuain/view?usp=sharing"
      variant="contained"
    >
      Resume
    </StyledButton>
  );
}

