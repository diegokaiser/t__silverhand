import { Box } from '@mui/material';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        width: { xs: '100%', lg: 'calc(100% - 280px)' },
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        flexShrink: 0,
        position: 'fixed',
        top: 0,
        left: 'auto',
        right: 0,
        color: '#fff',
        transition:
          'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
        ml: '280px',
        backgroundColor: 'rgba(248, 249, 250, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 1200,
      }}
    >
      <Box
        sx={{
          px: { xs: 2, sm: 4.5, lg: 8 },
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          minHeight: '74px',
          pb: '8px',
          pt: '8px',
        }}
      ></Box>
    </Box>
  );
};

export default Header;
