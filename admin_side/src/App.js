import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './Dashboard/dashboard.js';
import { LoginCard } from './Login/login.js';
import { SeatAllocation } from './SeatAllocation/seatallocation.js';
import { Notice } from './views/Notice/notice.js';
import { Complaint } from './Complaint/complaint.js';
import { Dining } from "./Dining/dining.js";
import DailyDiningEntryPage from "./Dining/diningEntry.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginCard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/seatallocation" element={<SeatAllocation />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/complaint" element={<Complaint />} />
      {/* <Route path="/dining" element={<Dining />} />
      <Route path="/dining/daily-dining-entries" element={<DailyDiningEntryPage />} /> */}
    </Routes>
  );
}

export default App;
