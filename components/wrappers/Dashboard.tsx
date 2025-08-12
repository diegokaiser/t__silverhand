'use client';

import { Fragment, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { PrimeReactProvider } from 'primereact/api';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Box } from '@mui/material';
import { Footer, Header } from '@/components/layout';
import Sidebar from '@/components/layout/Sidebar';

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const queryClient = new QueryClient();

  return (
    <PrimeReactProvider>
      <QueryClientProvider client={queryClient}>
        <Fragment>
          <Box></Box>
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Header />
            <Sidebar />
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
                <Footer />
              </Box>
            </Box>
          </Box>
        </Fragment>
      </QueryClientProvider>
    </PrimeReactProvider>
  );
};

export default DashboardWrapper;
