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
      id: 'newsfeed',
      title: 'Newsfeed',
      type: 'item',
      url: '/newsfeed',
      icon: icons.IconNews,
      breadcrumbs: false
    }
  ]
};

export default newsfeed;
