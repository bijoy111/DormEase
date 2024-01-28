import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Notice = Loadable(lazy(() => import('views/notice')));
const Complaint = Loadable(lazy(() => import('views/complaint')));
const Noticeboard = Loadable(lazy(() => import('views/noticeboard')));
const UpdateProfile = Loadable(lazy(() => import('views/updateprofile')));
const ViewProfile = Loadable(lazy(() => import('views/viewprofile')));
const Loginpage = Loadable(lazy(() => import('views/login')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'notice',
      children: [
        {
          path: 'default',
          element: <Notice />
        }
      ]
    },
    {
      path: 'complaint',
      children: [
        {
          path: 'default',
          element: <Complaint />
        }
      ]
    },
    {
      path: 'noticeboard',
      element: <Noticeboard />
    },
    {
      path: 'updateprofile',
      element: <UpdateProfile />
    },
    {
      path: 'viewprofile',
      element: <ViewProfile />
    },
    {
      path: 'login',
      element: <Loginpage />
    }
  ]
};

export default MainRoutes;
