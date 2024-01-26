// assets
import { IconNews } from '@tabler/icons';

// constant
const icons = { IconNews };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const newsfeed = {
  id: 'newsfeed',
  //title: 'Dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Newsfeed',
      type: 'item',
      url: '/newsfeed/default',
      icon: icons.IconNews,
      breadcrumbs: false
    }
  ]
};

export default newsfeed;
