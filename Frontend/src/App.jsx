import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginCard } from './Login/login.jsx';
import { Dashboard } from './Student/dashboard.jsx'
import { Feed } from './Student/feed.jsx';
import { Notices } from './Student/notice.jsx';
import { Complaints } from './Student/complaint.jsx';
import { DiningMenu } from './Student/dining.jsx';
import {EditProfile} from './Student/edit_profile.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginCard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/notice" element={<Notices />} />
      <Route path="/complaint" element={<Complaints />} />
      <Route path="/dining-menu" element={<DiningMenu />} />
      <Route path="/dashboard/edit" element={<EditProfile />} />
    </Routes>
  );
}

export default App;
