import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './Dashboard/dashboard.js';
import { LoginCard } from './Login/login.js';
import { SeatAllocation } from './SeatAllocation/seatallocation.js';
import { Complaint } from './Complaint/complaint.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginCard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/seatallocation" element={<SeatAllocation />} />
      <Route path="/complaint" element={<Complaint />} />
    </Routes>
  );
}

export default App;
