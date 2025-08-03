'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Box } from '@mui/material';

const SidebarHost = () => {
  const pathname = usePathname();

  useEffect(() => {
    const scriptId = 't-liadrin-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'http://localhost:4173/t-liadrin.js';
      script.type = 'module';
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Box component="nav" aria-label="mailbox folders" sx={{ flexBasis: 0, zIndex: 1200 }}>
        <Box
          sx={{
            flex: '0 0 auto',
            width: '280px',
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            backgroundColor: '#f8f9fa',
            borderRight: '1px dashed #bec8d0',
            transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            overflowX: 'hidden',
            boxShadow: 'none',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#f8f9fa',
              width: '280px',
              borderRight: '1px dashed #bec8d0',
              transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
              overflowX: 'hidden',
              boxShadow: 'none',
              color: '#1d2630',
              overflowY: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              flex: '1 0 auto',
              zIndex: '1200',
              position: 'fixed',
              top: 0,
              outline: 0,
              left: 0,
              backgroundImage: 'none',
            }}
          >
            <Box
              sx={{
                minHeight: '74px',
                paddingTop: { xs: '10px', lg: '8px' },
                paddingBottom: { xs: '18px', lg: '8px' },
                paddingLeft: '24px',
              }}
            ></Box>
            <Box sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
              <t-liadrin-sidebar
                menu-endpoint=""
                main-color="#4680FF"
                text-color="#5B6B79"
                pathname={pathname}
              />
            </Box>
            <Box
              sx={{
                borderTop: '2px solid',
                borderTopColor: 'rgba(219, 224, 229, 0.65)',
                minHeight: '76px',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingRight: '24px',
                paddingLeft: '24px',
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SidebarHost;
