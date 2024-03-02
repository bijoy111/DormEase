import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Complaint } from './Complaint/complaint.js';
import { Dashboard } from './Dashboard/dashboard.js';
import { Dining } from "./Dining/dining.js";
import DailyDiningEntryPage from "./Dining/diningEntry.js";
import DisbursementInfoPage from "./Dining/disbursement.js";
import { LoginCard } from './Login/login.js';
import { SeatAllocation } from './SeatAllocation/seatallocation.js';
import { Notice } from './Notice/notice.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginCard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/seatallocation" element={<SeatAllocation />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/dining/daily-dining-entries" element={<DailyDiningEntryPage />} />
      <Route path="/dining/disbursement-info" element={<DisbursementInfoPage />} />
    </Routes>
  );
}

export default App;
