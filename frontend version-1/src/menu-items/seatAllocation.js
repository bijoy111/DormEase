// assets
import { IconCircles } from '@tabler/icons';

// constant
const icons = { IconCircles };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const seatAllocation = {
  id: 'seatAllocation',
  //title: 'Dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Seat Allocation',
      type: 'item',
      url: '/seatAllocation/default',
      icon: icons.IconCircles,
      breadcrumbs: false
    }
  ]
};

export default seatAllocation;
