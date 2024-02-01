// assets
import { IconNews } from '@tabler/icons';

// constant
const icons = { IconNews };

// ==============================||   NEWSFEED MENU ITEMS ||============================== //

const newsfeed = {
  id: 'newsfeed',
  title: '',
  type: 'group',
  children: [
    {
      id: 'newsfeed',
      title: 'Newsfeed',
      type: 'item',
      url: '/newsfeed/default',
      icon: icons.IconNews,
      breadcrumbs: false
    }
  ]
};

export default newsfeed;
