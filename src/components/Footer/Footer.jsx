import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#b71c1c',
        color: '#ffffff',
        padding: 2,
        marginTop: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">© 2024 Borja Mates. Todos los derechos reservados.</Typography>
    </Box>
  );
};

export default Footer;