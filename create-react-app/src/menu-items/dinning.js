// assets
import { IconSalad } from '@tabler/icons';

// constant
const icons = { IconSalad };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dinning = {
  id: 'dinning',
  //title: 'Dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dinning',
      type: 'item',
      url: '/dinning/default',
      icon: icons.IconSalad,
      breadcrumbs: false
    }
  ]
};

export default dinning;
