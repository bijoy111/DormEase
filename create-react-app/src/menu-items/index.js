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

// Function to filter menu items based on user type
const filterMenuItems = (items, userType) => {
  // Define menu items for different user types
  // const resident_user = [dashboard, newsfeed, notice, complaint, seatAllocation, dinning, pages, utilities, other];
  const resident_user = [dashboard, newsfeed, notice, complaint, seatAllocation, dinning];
  const attached_user = [notice, complaint, seatAllocation];

  // Return menu items based on user type
  return userType === 'resident' ? resident_user : attached_user;
};

const userType = 'resident';

const menuItems = {
  items: filterMenuItems([dashboard, newsfeed, notice, complaint, seatAllocation, dinning, pages, utilities, other], userType)
};

export default menuItems;
