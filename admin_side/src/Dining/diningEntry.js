import React, { useState } from 'react';
import './diningentry.css'; // Import custom CSS file
import { Navbar } from '../Navbar/Navbar';

function DailyDiningEntryPage() {
  // Define student data with IDs and their corresponding Level-Term

  // Get current date
  const today = new Date();
  const curr_date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

  const studentsData = [
    { id: '2205048', level: 1, term: 1 },
    { id: '2105055', level: 2, term: 1 },
    { id: '2005062', level: 3, term: 1 },
    { id: '1905079', level: 4, term: 1 },
    { id: '2205042', level: 1, term: 1 },
    { id: '2105053', level: 2, term: 1 },
    { id: '2005063', level: 3, term: 1 },
    { id: '1905073', level: 4, term: 1 },
    { id: '2205023', level: 1, term: 1 },
    { id: '2105021', level: 2, term: 1 },
    { id: '2005012', level: 3, term: 1 },
    { id: '1905029', level: 4, term: 1 },
    { id: '2205032', level: 1, term: 1 },
    { id: '2105043', level: 2, term: 1 },
    { id: '2005033', level: 3, term: 1 },
    { id: '1905063', level: 4, term: 1 },
    { id: '2205048', level: 1, term: 1 },
    { id: '2105055', level: 2, term: 1 },
    { id: '2005062', level: 3, term: 1 },
    { id: '1905079', level: 4, term: 1 },
    { id: '2205042', level: 1, term: 1 },
    { id: '2105053', level: 2, term: 1 },
    { id: '2005063', level: 3, term: 1 },
    { id: '1905073', level: 4, term: 1 },
    { id: '2205023', level: 1, term: 1 },
    { id: '2105021', level: 2, term: 1 },
    { id: '2005012', level: 3, term: 1 },
    { id: '1905029', level: 4, term: 1 },
    { id: '2205032', level: 1, term: 1 },
    { id: '2105043', level: 2, term: 1 },
    { id: '2005033', level: 3, term: 1 },
    { id: '1905063', level: 4, term: 1 },
    { id: '2205048', level: 1, term: 1 },
    { id: '2105055', level: 2, term: 1 },
    { id: '2005062', level: 3, term: 1 },
    { id: '1905079', level: 4, term: 1 },
    { id: '2205042', level: 1, term: 1 },
    { id: '2105053', level: 2, term: 1 },
    { id: '2005063', level: 3, term: 1 },
    { id: '1905073', level: 4, term: 1 },
    { id: '2205023', level: 1, term: 1 },
    { id: '2105021', level: 2, term: 1 },
    { id: '2005012', level: 3, term: 1 },
    { id: '1905029', level: 4, term: 1 },
    { id: '2205032', level: 1, term: 1 },
    { id: '2105043', level: 2, term: 1 },
    { id: '2005033', level: 3, term: 1 },
    { id: '1905063', level: 4, term: 1 },
    { id: '2205048', level: 1, term: 1 },
    { id: '2105055', level: 2, term: 1 },
    { id: '2005062', level: 3, term: 1 },
    { id: '1905079', level: 4, term: 1 },
    { id: '2205042', level: 1, term: 1 },
    { id: '2105053', level: 2, term: 1 },
    { id: '2005063', level: 3, term: 1 },
    { id: '1905073', level: 4, term: 1 },
    { id: '2205023', level: 1, term: 1 },
    { id: '2105021', level: 2, term: 1 },
    { id: '2005012', level: 3, term: 1 },
    { id: '1905029', level: 4, term: 1 },
    { id: '2205032', level: 1, term: 1 },
    { id: '2105043', level: 2, term: 1 },
    { id: '2005033', level: 3, term: 1 },
    { id: '1905063', level: 4, term: 1 },
    { id: '2205048', level: 1, term: 1 },
    { id: '2105055', level: 2, term: 1 },
    { id: '2005062', level: 3, term: 1 },
    { id: '1905079', level: 4, term: 1 },
    { id: '2205042', level: 1, term: 1 },
    { id: '2105053', level: 2, term: 1 },
    { id: '2005063', level: 3, term: 1 },
    { id: '1905073', level: 4, term: 1 },
    { id: '2205023', level: 1, term: 1 },
    { id: '2105021', level: 2, term: 1 },
    { id: '2005012', level: 3, term: 1 },
    { id: '1905029', level: 4, term: 1 },
    { id: '2205032', level: 1, term: 1 },
    { id: '2105043', level: 2, term: 1 },
    { id: '2005033', level: 3, term: 1 },
    { id: '1905063', level: 4, term: 1 },
    { id: '2205048', level: 1, term: 1 },
    { id: '2105055', level: 2, term: 1 },
    { id: '2005062', level: 3, term: 1 },
    { id: '1905079', level: 4, term: 1 },
    { id: '2205042', level: 1, term: 1 },
    { id: '2105053', level: 2, term: 1 },
    { id: '2005063', level: 3, term: 1 },
    { id: '1905073', level: 4, term: 1 },
    { id: '2205023', level: 1, term: 1 },
    { id: '2105021', level: 2, term: 1 },
    { id: '2005012', level: 3, term: 1 },
    { id: '1905029', level: 4, term: 1 },
    { id: '2205032', level: 1, term: 1 },
    { id: '2105043', level: 2, term: 1 },
    { id: '2005033', level: 3, term: 1 },
    { id: '1905063', level: 4, term: 1 },
    { id: '2205048', level: 1, term: 1 },
    { id: '2105055', level: 2, term: 1 },
    { id: '2005062', level: 3, term: 1 },
    { id: '1905079', level: 4, term: 1 },
    { id: '2205042', level: 1, term: 1 },
    { id: '2105053', level: 2, term: 1 },
    { id: '2005063', level: 3, term: 1 },
    { id: '1905073', level: 4, term: 1 },
    { id: '2205023', level: 1, term: 1 },
    { id: '2105021', level: 2, term: 1 },
    { id: '2005012', level: 3, term: 1 },
    { id: '1905029', level: 4, term: 1 },
    { id: '2205032', level: 1, term: 1 },
    { id: '2105043', level: 2, term: 1 },
    { id: '2005033', level: 3, term: 1 },
    { id: '1905063', level: 4, term: 1 },
    { id: '1905063', level: 4, term: 1 },
    // Add more student data as needed
  ];

  // Initialize state for meal entries
  const [lunchEntries, setLunchEntries] = useState({});
  const [dinnerEntries, setDinnerEntries] = useState({});

  // Function to toggle meal status for a student ID
  const toggleMealStatus = (mealType, id) => {
    if (mealType === 'lunch') {
      setLunchEntries((prevEntries) => ({
        ...prevEntries,
        [id]: !prevEntries[id],
      }));
    } else if (mealType === 'dinner') {
      setDinnerEntries((prevEntries) => ({
        ...prevEntries,
        [id]: !prevEntries[id],
      }));
    }
  };
  // Initialize state for current meal type (lunch or dinner)
  const [mealType, setMealType] = useState('lunch');


  // Filter student IDs by level and term and sort them
  const filteredStudents = studentsData
    .filter((student) => student.term === 1 || student.term === 2) // Filter by term (1 or 2)
    .sort((a, b) => a.id.localeCompare(b.id)); // Sort IDs alphabetically

  const totalStudents = filteredStudents.length;
  const presentInLunch = Object.values(lunchEntries).filter((status) => status).length;
  const presentInDinner = Object.values(dinnerEntries).filter((status) => status).length;
  const absentInLunch = totalStudents - presentInLunch;
  const absentInDinner = totalStudents - presentInDinner;

  // Render student IDs by level and term
  const renderStudentIds = (level) => (
    <div key={level} className="mb-4">
      <h2 className="text-lg font-semibold">Level/Term: {level}-1</h2>
      <div className="student-ids">
        {filteredStudents
          .filter((student) => student.level === level)
          .map((student) => (
            <div
              key={student.id}
              className={`student-id ${mealType === 'lunch' ? (lunchEntries[student.id] ? 'bg-green-300' : 'bg-white') : (dinnerEntries[student.id] ? 'bg-green-300' : 'bg-white')}`}
              onClick={() => toggleMealStatus(mealType, student.id)}
            >
              {student.id}
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="container">

      <Navbar />

      <div>
        <div className='top-box'>
          <h1 className="text-center">Today's Date : {curr_date}</h1>
          {/* Toggle buttons for Lunch and Dinner */}
          <div className="flex justify-center space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded-md ${mealType === 'lunch' ? 'bg-blue-500 text-white' : 'bg-grey-300 text-gray-700'}`}
              onClick={() => setMealType('lunch')}
            >
              Lunch
            </button>
            <button
              className={`px-4 py-2 rounded-md ${mealType === 'dinner' ? 'bg-blue-500 text-white' : 'bg-grey-300 text-gray-700'}`}
              onClick={() => setMealType('dinner')}
            >
              Dinner
            </button>
          </div>

          <div className='back-button'>
            {/* back icon */}
            <button onClick={() => window.history.back()}><img height="5px" width="30px" src="https://img.icons8.com/ios/50/000000/back.png"/></button>
          </div>
        </div>

        {/* Render student IDs by level and term */}
        <div className='student-list'>
          {Array.from(new Set(filteredStudents.map((student) => student.level))).map(renderStudentIds)}
        </div>
      </div>

        <div className="meal-stats">
          <h2 className="text-lg font-semibold mb-2" >Meal Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="info-box1" style={{ width: '225px' }}>
              <div className="info-box1">
                <p>Total Students: {totalStudents}</p>
              </div>
            </div>
            <br />
            <div className='info-box1' style={{ width: '225px' }}>
              <div className="info-box1">
                <p>Present in Lunch: {presentInLunch}</p>
              </div>
              <div className="info-box1">
                <p>Absent in Lunch: {absentInLunch}</p>
              </div>
            </div>
            <br />

            <div className='info-box1' style={{ width: '225px' }}>
              <div className="info-box1">
                <p>Present in Dinner: {presentInDinner}</p>
              </div>
              <div className="info-box1">
                <p>Absent in Dinner: {absentInDinner}</p>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default DailyDiningEntryPage;
