import React, { useState } from 'react';

function DailyDiningEntryPage() {
  // Dummy student IDs
  const studentIDs = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110'];

  // State for selected meal type (lunch or dinner)
  const [selectedMeal, setSelectedMeal] = useState('lunch');

  // State for meal entry statistics
  const [mealEntryStats, setMealEntryStats] = useState({
    lunchEntries: 0,
    dinnerEntries: 0,
  });

  // Function to handle meal entry for a student
  const handleMealEntry = (studentID) => {
    if (selectedMeal === 'lunch') {
      setMealEntryStats((prevState) => ({
        ...prevState,
        lunchEntries: prevState.lunchEntries + 1,
      }));
      // Perform other actions for lunch entry
    } else {
      setMealEntryStats((prevState) => ({
        ...prevState,
        dinnerEntries: prevState.dinnerEntries + 1,
      }));
      // Perform other actions for dinner entry
    }
  };

  return (
    <div className="daily-dining-entry-page">
      {/* Meal Type Toggle */}
      <div className="meal-toggle">
        <label>
          <input
            type="radio"
            value="lunch"
            checked={selectedMeal === 'lunch'}
            onChange={() => setSelectedMeal('lunch')}
          />
          Lunch
        </label>
        <label>
          <input
            type="radio"
            value="dinner"
            checked={selectedMeal === 'dinner'}
            onChange={() => setSelectedMeal('dinner')}
          />
          Dinner
        </label>
      </div>

      {/* Student ID Buttons */}
      <div className="student-list">
        {studentIDs.map((studentID) => (
          <button key={studentID} onClick={() => handleMealEntry(studentID)}>
            {studentID}
          </button>
        ))}
      </div>

      {/* Meal Entry Statistics */}
      <div className="meal-stats">
        <h2>Meal Entry Statistics</h2>
        <p>Lunch Entries: {mealEntryStats.lunchEntries}</p>
        <p>Dinner Entries: {mealEntryStats.dinnerEntries}</p>
      </div>
    </div>
  );
}

export default DailyDiningEntryPage;
