import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Navbar } from "../Navbar/Navbar";
import axios from 'axios';

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
                    <li key={student.stu_id}>
                        <p>ID: {student.stu_id}</p>
                        <p>Name: {student.name}</p>
                        <button onClick={() => handleShowCauseClick(student.stu_id)}>Show Cause</button>
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
    const currentDiningMonth = currentDate.getMonth(); // Replace with actual dining month
    const days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    // Format current date in YYYY-MM-DD format
    const formattedDate = currentDate.toISOString().split('T')[0];


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [absentMealCount, setAbsentMealCount] = useState(0);
    const [absentStudents, setAbsentStudents] = useState([]); // Add your list of absent students here
    const [messManagers, setMessManagers] = useState([]); // Add your list of mess managers here
    const [menu, setMenu] = useState(''); // Add your lunch menu here

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

    const fetchMessManagers = async () => {
        const response = await axios.get('http://localhost:3000/dining/mess-managers/get');
        setMessManagers(response.data);
    };

    const fetchMenu = async () => {
        const response = await axios.get('http://localhost:3000/dining/' + formattedDate);
        setMenu(response.data);
    };

    const fetchAbsentStudents = async () => {
        const response = await axios.get('http://localhost:3000/dining/count/' + currentDiningMonth);
        console.log('bleh', response.data);
        setAbsentStudents(response.data);
    }

    useEffect(() => {
        fetchMessManagers();
        fetchMenu();
        fetchAbsentStudents();
    }, []);

    const handleShowCause = (studentId) => {
        // Implement logic to show cause for the selected student
        // Navigate to the show cause page with the studentId
    };

    const handleFilterAbsentStudents = () => {
        const studentsData = absentStudents;
        const filteredStudents = (studentsData.filter(student => (days_in_month[currentDate.getMonth()] - student.present_meal_count) >= absentMealCount));
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
                        {messManagers.map(manager => (
                            <div key={manager.stu_id} className="manager">
                                <img src={img} alt={manager.name} style={{ width: '70px', height: '70px', borderRadius: '50%', marginLeft: '70px' }} />
                                <p className="text-lg font-semibold mb-1" style={{ marginLeft: '60px' }}> {manager.name}</p>
                                <br />
                                <p>ID: {manager.stu_id}</p>
                                <p>Department: {manager.dept}</p>
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
                            <div className="menu-description">
                                {menu.lunch && menu.lunch.length > 0 ? (
                                    menu.lunch.map((item, index) => (
                                        <span key={index}>
                                            {item.name}
                                            {index < menu.lunch.length - 1 && ','}
                                        </span>
                                    ))
                                ) : (
                                    'No items available'
                                )}
                            </div>
                        </div>
                        {/* Right Part (Dinner Menu) */}
                        <div className="dinner-menu">
                            <div className="menu-title">Today's Dinner Menu</div>
                            <div className="menu-description">{menu.dinner && menu.dinner.length > 0 ? (
                                menu.lunch.map((item, index) => (
                                    <span key={index}>
                                        {item.name}
                                        {index < menu.lunch.length - 1 && ', '}
                                    </span>
                                ))
                            ) : (
                                'No items available'
                            )}</div>
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
                                <div key={student.stu_id} className="student-item">
                                    <p>Name: {student.name}</p>
                                    <p>Absent Meal Count: {days_in_month[currentDate.getMonth()] - student.present_meal_count}</p>
                                    <button onClick={() => handleShowCause(student.stu_id)}>Show Cause</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
