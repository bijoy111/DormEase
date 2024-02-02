// assets
import { IconSalad } from '@tabler/icons';

// constant
const icons = { IconSalad };

// ==============================|| DINNING MENU ITEMS ||============================== //

const dinning = {
  id: 'dinning',
  title: '',
  type: 'group',
  children: [
    {
      id: 'dinning',
      title: 'Dinning',
      type: 'item',
      url: '/dinning/default',
      icon: icons.IconSalad,
      breadcrumbs: false
    }
  ]
};

export default dinning;
