import React from 'react';
import { Button } from '@mui/material';

export default function Links() {
  return (
    <div>
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
    </div>
  );
}
