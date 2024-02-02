import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css'; // Import your custom CSS file

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState('');

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    // Add your custom logic for handling date changes here
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <div>
      <div style={{ textAlign: 'center', fontSize: '20px' }}>Dining Calendar</div>
      <div className="calendar-container">
        <div className="calendar-content">
          <br/>
          <div className="calendar">
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="custom-calendar"
            />
          </div>
          <div className="note-card">
            <h2>Menu list</h2>
            <textarea
              placeholder="No items list available"
              value={note}
              onChange={handleNoteChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
