// assets
import { IconKeyboard } from '@tabler/icons';

// constant
const icons = { IconKeyboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const complaint = {
  id: 'complaint',
  //title: 'Dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Complaint',
      type: 'item',
      url: '/complaint/default',
      icon: icons.IconKeyboard,
      breadcrumbs: false
    }
  ]
};

export default complaint;
