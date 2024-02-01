// assets
import { IconKeyboard } from '@tabler/icons';

// constant
const icons = { IconKeyboard };

// ==============================|| COMPLAINT MENU ITEMS ||============================== //

const complaint = {
  id: 'complaint',
  title: '',
  type: 'group',
  children: [
    {
      id: 'complaint',
      title: 'Complaint',
      type: 'item',
      url: '/complaint/default',
      icon: icons.IconKeyboard,
      breadcrumbs: false
    }
  ]
};

export default complaint;
