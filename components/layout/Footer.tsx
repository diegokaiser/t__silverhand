import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{ p: '24px 16px 0', mt: 'auto' }}>
      <Typography variant="caption">
        &copy; Silverhand 🐺, invoked by Trascendiendo.digital
      </Typography>
    </Box>
  );
};

export default Footer;
