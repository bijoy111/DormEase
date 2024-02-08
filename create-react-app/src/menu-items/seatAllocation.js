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
<<<<<<< HEAD
      url: '/seatAllocation',
=======
      url: '/seatAllocation/default',
>>>>>>> 8529f0c (admin basic frontend added)
      icon: icons.IconCircles,
      breadcrumbs: false
    }
  ]
};

export default seatAllocation;
