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
      id: 'complaint',
      title: 'Complaint',
      type: 'item',
      url: '/complaint',
      icon: icons.IconKeyboard,
      breadcrumbs: false
    }
  ]
};

export default complaint;
