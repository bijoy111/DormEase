// assets
import { IconArticle } from '@tabler/icons';

// constant
const icons = { IconArticle };

// ==============================|| NOTICE MENU ITEMS ||============================== //

const notice = {
  id: 'notice',
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
