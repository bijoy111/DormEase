<<<<<<< HEAD
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css'; // Import your custom CSS file

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState('');
=======
import beef_pic from 'assets/images/beef.png';
import chicken_pic from 'assets/images/chicken.png';
import egg_pic from 'assets/images/egg1.png';
import fish_pic from 'assets/images/fish.png';
// import food_serve from 'assets/images/food_serving5.mp4';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  // const [note, setNote] = useState('');
>>>>>>> 8529f0c (admin basic frontend added)

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    // Add your custom logic for handling date changes here
  };

<<<<<<< HEAD
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
=======
  // const handleNoteChange = (event) => {
  //   setNote(event.target.value);
  // };

  return (
    <div className="page-container" style={{ position: 'relative', zIndex: '1' }}>
      <div className="videoMain">
        {/* <video src ={food_serve}autoPlay loop muted/> */}
        <br/>
        <div className="content" style={{marginTop: '20px'}}>
          <div className="row" style={{ position: 'relative', zIndex: '2' }}>
            <div className="column" style={{color:'#673AB7'}}>
              <div className="calendar-container">
                <div className="calendar-header" style={{color:'#673AB7'}}>
                  <h2>Dining <br/> Calendar</h2>
                </div>
                <div className="calendar-body" style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',backgroundColor: '#edeafd'}}>
                  <Calendar
                    onChange={handleDateChange}
                    value={date}
                    className="custom-calendar"
                  />
                </div>
              </div>
            </div>
            <br/>
            <div className="column">
              <div className="note-card" style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',backgroundColor: '#edeafd',width:'300px'}}>
                <h1 className="font-effect-outline" style={{color:'#673AB7'}}>Menu List</h1>
                <br />
                <div className="note-card" style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}}>
                  {/* <textarea
                    className="font-effect-outline"
                    placeholder="No items list available"
                    value={note}
                    onChange={handleNoteChange}
                    style={{ height: '200px' }}
                  /> */}
                  <br/>
                  <br/>
                  <div style={{ textAlign: 'center', fontSize: '20px' }}>Chicken</div>
                  <br/>
                  <div style={{ textAlign: 'center', fontSize: '20px' }}>Fish</div>
                  <br/>
                  <div style={{ textAlign: 'center', fontSize: '20px' }}>Egg</div>
                  <br/>
                  <div style={{ textAlign: 'center', fontSize: '20px' }}>Beef</div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* <br />
          <br />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/> */}
          <div className="row">
            <div className="column">
              <br/>
              <br/>
              <div style={{ backgroundColor: '#EDE7F6', padding: '15px', borderRadius: '10px' }}>
                <h1 className="font-effect-outline" style={{ color: '#673AB7', margin: '0' }}>Menu Image</h1>
              </div>
              <br />
              <Carousel interval={1000} showArrows={true} className="rounded-xl">
                <div className="carousel-item" style={{ width: '50%', height: '300px', margin: '0 auto' }}>
                  <div className="bg-image hover-overlay ripple rounded-0"
                    data-mdb-ripple-color="light"
                    style={{ padding: '10px', borderRadius: '2px', height: '100%' }}
                  >
                    <img src={beef_pic} className="w-100 h-100" alt="Media" style={{ objectFit: 'cover', }} />
                    <a href="#!">
                      <div className="mask" > </div>
                    </a>
                  </div>
                </div>
                <div className="carousel-item" style={{ width: '50%', height: '300px', margin: '0 auto' }}>
                  <div className="bg-image hover-overlay ripple rounded-0"
                    data-mdb-ripple-color="light"
                    style={{ padding: '10px', borderRadius: '2px', height: '100%' }}
                  >
                    <img src={egg_pic} className="w-100 h-100" alt="Media" style={{ objectFit: 'cover', }} />
                    <a href="#!">
                      <div className="mask" ></div>
                    </a>
                  </div>
                </div>
                <div className="carousel-item" style={{ width: '50%', height: '300px', margin: '0 auto' }}>
                  <div className="bg-image hover-overlay ripple rounded-0"
                    data-mdb-ripple-color="light"
                    style={{ padding: '10px', borderRadius: '2px', height: '100%' }}
                  >
                    <img src={chicken_pic} className="w-100 h-100" alt="Media" style={{  objectFit: 'cover', }} />
                    <a href="#!">
                      <div className="mask" ></div>
                    </a>
                  </div>
                </div>
                <div className="carousel-item" style={{ width: '50%', height: '300px', margin: '0 auto' }}>
                  <div className="bg-image hover-overlay ripple rounded-0"
                    data-mdb-ripple-color="light"
                    style={{ padding: '10px', borderRadius: '2px', height: '100%' }}
                  >
                    <img src={fish_pic} className="w-100 h-100" alt="Media" style={{  objectFit: 'cover', }} />
                    <a href="#!">
                      <div className="mask" ></div>
                    </a>
                  </div>
                </div>
              </Carousel>
            </div>
>>>>>>> 8529f0c (admin basic frontend added)
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
