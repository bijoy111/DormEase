import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './dashboard.js';
import { LoginCard } from './login.js';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginCard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
