// assets
import { IconCircles } from '@tabler/icons';

// constant
const icons = { IconCircles };

// ==============================|| SEATALLOCATION MENU ITEMS ||============================== //

const seatAllocation = {
  id: 'seatAllocation',
  title: '',
  type: 'group',
  children: [
    {
      id: 'seatAllocation',
      title: 'Seat Allocation',
      type: 'item',
      url: '/seatAllocation',
      icon: icons.IconCircles,
      breadcrumbs: false
    }
  ]
};

export default seatAllocation;
