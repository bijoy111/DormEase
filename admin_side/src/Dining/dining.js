import { useNavigate } from 'react-router-dom';
import { Navbar } from "../Navbar/Navbar";
import img from '../images/common_user10.png';
import './dining.css';
export function Dining() {

    // Get current date and format it
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentDiningMonth = 'January 2024'; // Replace with actual dining month

    // Format current date in MMMM DD, YYYY format
    const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'long', day: '2-digit', year: 'numeric' }).format(currentDate);

    // Dummy data for dining managers
    const diningManagers = [
        { id: 1905024, name: 'Rakib Ahsan', department: 'CSE', level_term: '4-2', image: img },
        { id: 1905052, name: 'Bijoy Ahmed', department: 'CSE', level_term: '4-2', image: img },
        // Add more dining managers as needed
    ];

    // Dummy data for today's lunch and dinner menus
    const lunchMenu = 'Grilled Chicken Salad'; // Replace with actual lunch menu
    const dinnerMenu = 'Spaghetti Bolognese'; // Replace with actual dinner menu


    const navigate = useNavigate();

    const handleDailyDiningEntriesClick = () => {
        navigate('/dining/daily-dining-entries');
    };

    const handleDisbursementInfoClick = () => {
        navigate('/dining/disbursement-info');
    };


    return (
        <div className="dining">

            <Navbar />
            <div className="dining-home-page">
                {/* Header */}
                <header className="header">
                    <div className="header-info" style={{ backgroundColor: '#bbd6f0', width: '350px', marginLeft: '400px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '15px' }}>
                        <h2>Current Dining Month: {currentDiningMonth}</h2>
                        <p>Day: {currentDayOfMonth}</p>
                        <p>Date: {formattedDate}</p>
                    </div>

                    {/* Dining Managers Info */}
                </header>

                {/* Body */}
                <div className="body">
                    <div className="manager-info">
                        <h5 style={{ marginLeft: '60px' }}><b>Dining Managers</b></h5>
                        {diningManagers.map(manager => (
                            <div key={manager.id} className="manager">
                                <img src={manager.image} alt={manager.name} style={{ width: '70px', height: '70px', borderRadius: '50%', marginLeft: '70px' }} />
                                <p style={{ marginLeft: '60px' }}> {manager.name}</p>
                                <br />
                                <p>ID: {manager.id}</p>
                                <p>Department: {manager.department}</p>
                                <p>Level/Term: {manager.level_term}</p>
                            </div>
                        ))}
                    </div>

                    <div className="button-container" style={{ marginTop: '25px' }}>
                        <button onClick={handleDailyDiningEntriesClick}>Daily Dining Entries</button>
                        <button onClick={handleDisbursementInfoClick}>Disbursement Info</button>
                        <button onClick={() => {/* Handle navigation to Dining Stats page */ }}>Dining Stats</button>
                        <button onClick={() => {/* Handle navigation to Dining History page */ }}>Dining History</button>
                    </div>
                </div>

                {/* Footer */}
                <footer className="footer">
                    <div className="footer-menu">
                        {/* Left Part (Lunch Menu) */}
                        <div className="lunch-menu">
                            <div className="menu-title">Today's Lunch Menu</div>
                            <div className="menu-description">{lunchMenu}</div>
                        </div>
                        {/* Right Part (Dinner Menu) */}
                        <div className="dinner-menu">
                            <div className="menu-title">Today's Dinner Menu</div>
                            <div className="menu-description">{dinnerMenu}</div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}