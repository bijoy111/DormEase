import { useEffect, useState } from 'react';
// material-ui

// project imports
import menuItem from 'menu-items';
import NavGroup from './NavGroup';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  // State for storing dashboard data
  const [dashboardData, setDashboardData] = useState(null);

  // Function to fetch dashboard data from the backend
  const fetchDashboardData = async () => {
    try {
      // Fetch data from the backend API
      const response = await fetch('http://localhost:3000/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });
      const data = await response.json();
      // Update the state with the fetched dashboard data
      console.log('shaim');
      setDashboardData(data);
      console.log(dashboardData);
      if (!dashboardData.resident) {
        console.log('No resident data found');
      }
      else {
        console.log('Resident data found');
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  // useEffect to fetch dashboard data when the component mounts
  useEffect(() => {
    fetchDashboardData();
  }, []); // Empty dependency array ensures it only runs once on mount

  // const navItems = menuItem.items.map((item) => {
  //   switch (item.type) {
  //     case 'group':
  //       return <NavGroup key={item.id} item={item} />;
  //     default:
  //       return (
  //         <Typography key={item.id} variant="h6" color="error" align="center">
  //           Menu Items Error
  //         </Typography>
  //       );
  //   }
  // });
  let navItems;
  const dashboard = dashboardData;
  if (dashboard && !dashboard.resident) {
    // Display specific menu items when resident is false
    navItems = menuItem.items.map((item) => (
      (item.id === 'seatAllocation' || item.id === 'notice' || item.id === 'complaint' ? <NavGroup key={item.id} item={item} /> : navItems)
    ));
  } else {
    // Display all menu items when resident is true or dashboardData is not available
    navItems = menuItem.items.map((item) => (
      <NavGroup key={item.id} item={item} />
    ));
  }

  return <>{navItems}</>;
};

export default MenuList;
