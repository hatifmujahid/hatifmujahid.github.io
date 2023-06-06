import { Box, Typography } from '@mui/material';

export default function Copyright() {
  return (
    <Box
      sx={{
        bottom: 0,
        width: '100%',
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">&copy; 2023 Your Website. All rights reserved.</Typography>
    </Box>
  );
}
