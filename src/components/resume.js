import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f50057',

  color: 'white',
  height: '100px', 
  width: '300px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  '&:hover': {
    backgroundColor: '#ff4081',
  },
  '&:hover, &:focus': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  fontSize:'20px', fontWeight:'lighter'
}));

export default function Resume() {
  return (
    <StyledButton
      component={Link}
      to="https://drive.google.com/file/d/1eVv3tqRd2OFzfrfcBLTgkzqfkKx_Ue7p/view?usp=sharing"
      variant="contained"
    >
      Resume
    </StyledButton>
  );
}

