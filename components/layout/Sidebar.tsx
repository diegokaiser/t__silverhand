import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Drawer, Navigation } from '@/components/molecules';

const Sidebar = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  return downLG ? <Drawer /> : <Navigation />;
};

export default Sidebar;
