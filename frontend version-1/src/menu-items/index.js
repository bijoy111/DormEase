import complaint from './complaint';
import dashboard from './dashboard';
import dinning from './dinning';
import newsfeed from './newsfeed';
import notice from './notice';
import other from './other';
import pages from './pages';
import seatAllocation from './seatAllocation';
import utilities from './utilities';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard,newsfeed,notice,complaint,seatAllocation,dinning, pages, utilities, other]
};

export default menuItems;
