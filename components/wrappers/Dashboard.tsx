'use client';

import { Fragment, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Box, Container } from '@mui/material';
import { Header } from '../layout';

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const SidebarHost = dynamic(() => import('../layout/SidebarHost'), { ssr: false });

  return (
    <Fragment>
      <Box></Box>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Header />
        <SidebarHost />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 1, sm: 3 },
            width: `calc(100% - 280px)`,
          }}
        >
          <Box
            sx={{
              px: { xs: 1, sm: 3 },
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              minHeight: '74px',
              py: 1,
            }}
          ></Box>
          <Box
            sx={{
              px: { xs: 2, sm: 3 },
              width: '100%',
              ml: 'auto',
              boxSizing: 'border-box',
              mr: 'auto',
              position: 'relative',
              minHeight: 'calc(100vh - 124px)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/** Breadcrumbs */}
            {children}
            {/** Footer */}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default DashboardWrapper;
