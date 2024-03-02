import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Navbar } from "../Navbar/Navbar";

import img from '../images/common_user10.png';
import './dining.css';


// StatsModal component for displaying the modal with filter input
const StatsModal = ({ show, handleClose, handleFilterChange }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <button onClick={handleClose}>Close</button>
                <input type="number" onChange={handleFilterChange} placeholder="Enter count of absent meals" />
            </div>
        </div>
    );
};

// AbsentStudentList component for displaying the list of absent students
const AbsentStudentList = ({ students, handleShowCauseClick }) => {
    return (
        <div>
            <h3>Absent Students</h3>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        <p>ID: {student.id}</p>
                        <p>Name: {student.name}</p>
                        <button onClick={() => handleShowCauseClick(student.id)}>Show Cause</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

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


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [absentMealCount, setAbsentMealCount] = useState(0);
    const [absentStudents, setAbsentStudents] = useState([]); // Add your list of absent students here

    const navigate = useNavigate();

    const handleDailyDiningEntriesClick = () => {
        navigate('/dining/daily-dining-entries');
    };

    const handleDisbursementInfoClick = () => {
        navigate('/dining/disbursement-info');
    };

    const handleStatsClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleShowCause = (studentId) => {
        // Implement logic to show cause for the selected student
        // Navigate to the show cause page with the studentId
    };

    const handleFilterAbsentStudents = () => {
        // fetch absent students from the server
        // filter students based on the absentMealCount
        // set the absent students in the state
        const studentsData = [
            { id: 1, name: 'John Doe', absentMealCount: 2 },
            { id: 2, name: 'Jane Smith', absentMealCount: 1 },
            { id: 3, name: 'Alice Johnson', absentMealCount: 3 },
            { id: 4, name: 'John Doe', absentMealCount: 4 },
            { id: 5, name: 'Jane Smith', absentMealCount: 3 },
            { id: 6, name: 'Alice Johnson', absentMealCount: 3 },
            { id: 7, name: 'John Doe', absentMealCount: 2 },
            { id: 8, name: 'Jane Smith', absentMealCount: 5 },
            { id: 9, name: 'Alice Johnson', absentMealCount: 3 },
            { id: 10, name: 'John Doe', absentMealCount: 2 },
            { id: 22, name: 'Jane Smith', absentMealCount: 1 },
            { id: 33, name: 'Alice Johnson', absentMealCount: 4 },
            // Add more student data as needed
        ];

        const filteredStudents = (studentsData.filter(student => student.absentMealCount >= absentMealCount));
        // Update state with filtered students
        setAbsentStudents(filteredStudents);
    };


    return (
        <div className="dining">

            <Navbar />
            <div className="dining-home-page">
                {/* Header */}
                <header className="header">
                    <div className="header-info" style={{ backgroundColor: '#bbd6f0', width: '350px', marginLeft: '400px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '15px' }}>
                        <h2 className="text-lg font-semibold mb-2">Current Dining Month: {currentDiningMonth}</h2>
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
                                <p className="text-lg font-semibold mb-1" style={{ marginLeft: '60px' }}> {manager.name}</p>
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
                        <button onClick={handleStatsClick}>Dining Stats</button>
                    </div>

                    {/* Footer */}

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
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleModalClose}>&times;</span>
                        <h2>Filter Absent Students</h2>
                        <div className="form-group">
                            <input
                                type="number"
                                id="absentMealCount"
                                placeholder='Enter count of absent meals'
                                value={absentMealCount}
                                onChange={(e) => setAbsentMealCount(e.target.value)}
                            />
                        </div>

                        <button onClick={handleFilterAbsentStudents}>Apply Filter</button>
                        
                        <div className="absent-students">
                        {absentStudents.map((student) => (
                            <div key={student.id} className="student-item">
                                <p>Name: {student.name}</p>
                                <p>Absent Meal Count: {student.absentMealCount}</p>
                                <button onClick={() => handleShowCause(student.id)}>Show Cause</button>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
