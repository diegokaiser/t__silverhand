import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useDrawer } from '@/hooks/useDrawer';
import Menu from '@/components/molecules/Menu';

const MainDrawer = () => {
  const { drawerOpen, toggleDrawer } = useDrawer();

  return (
    <Box component="nav">
      <Drawer open={drawerOpen} onClose={() => toggleDrawer(!drawerOpen)}>
        <Menu />
      </Drawer>
    </Box>
  );
};

export default MainDrawer;
