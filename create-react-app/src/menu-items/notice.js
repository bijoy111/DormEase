// assets
import { IconArticle } from '@tabler/icons';

// constant
const icons = { IconArticle };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const notice = {
  id: 'notice',
  //title: 'Dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'notice',
      title: 'Notice',
      type: 'item',
      url: '/notice/default',
      icon: icons.IconArticle,
      breadcrumbs: false
    }
  ]
};

export default notice;
