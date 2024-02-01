// import { lazy } from 'react';

// // project imports
// import MainLayout from 'layout/MainLayout';
// import Loadable from 'ui-component/Loadable';

// // dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
// const Notice = Loadable(lazy(() => import('views/notice')));
// const Complaint = Loadable(lazy(() => import('views/complaint')));
// const Noticeboard = Loadable(lazy(() => import('views/noticeboard')));
// const UpdateProfile = Loadable(lazy(() => import('views/updateprofile')));
// const ViewProfile = Loadable(lazy(() => import('views/viewprofile')));
// // const Loginpage = Loadable(lazy(() => import('views/login')));
// const Rootpage= Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
// const Newsfeed = Loadable(lazy(() => import('views/newsfeed')));
// // ==============================|| MAIN ROUTING ||============================== //

// const MainRoutes = {
//   path: '/',
//   element: <MainLayout />,
//   children: [
//     {
//       path: '/',
//       element: <Notice />
//     },
//     {
//       path: 'dashboard/Default',
//       element: <DashboardDefault />
//     },
//     {
//       path: 'notice/default',
//       element: <Notice />
//     },
//     {
//       path: 'complaint',
//       element: <Complaint />
//     },
//     {
//       path: 'newsfeed',
//       element: <Newsfeed />
//     },
//     {
//       path: 'noticeboard',
//       element: <Noticeboard />
//     },
//     {
//       path: 'updateprofile',
//       element: <UpdateProfile />
//     },
//     {
//       path: 'viewprofile',
//       element: <ViewProfile />
//     },
//     {
//       path: 'pages/authentication/authentication3/Login3',
//       element: <Rootpage />
//     }
//   ]
// };

// export default MainRoutes;


import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Notice = Loadable(lazy(() => import('views/notice')));
const Complaint = Loadable(lazy(() => import('views/complaint')));
const Newsfeed = Loadable(lazy(() => import('views/newsfeed')));
const Noticeboard = Loadable(lazy(() => import('views/noticeboard')));
const UpdateProfile = Loadable(lazy(() => import('views/updateprofile')));
const ViewProfile = Loadable(lazy(() => import('views/viewprofile')));
const Loginpage = Loadable(lazy(() => import('views/login')));
const Rootpage= Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  // element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Rootpage />
    },
    {
      path: 'dashboard',
      element: <MainLayout />,
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'notice',
      element: <MainLayout />,
      children: [
        {
          path: 'default',
          element: <Notice />
        }
      ]
    },
    {
      path: 'complaint',
      element: <MainLayout />,
      children: [
        {
          path: 'default',
          element: <Complaint />
        }
      ]
    },
    {
      path: 'newsfeed',
      element: <MainLayout />,
      children: [
        {
          path: 'default',
          element: <Newsfeed />
        }
      ]
    },
    {
      path: 'noticeboard',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Noticeboard />
        }
      ]
      // element: <Noticeboard />
    },
    {
      path: 'updateprofile',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <UpdateProfile />
        }
      ]
      // element: <UpdateProfile />
    },
    {
      path: 'viewprofile',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <ViewProfile />
        }
      ]
      // element: <ViewProfile />
    },
    {
      path: 'login',
      element: <Loginpage />
    }
  ]
};

export default MainRoutes;