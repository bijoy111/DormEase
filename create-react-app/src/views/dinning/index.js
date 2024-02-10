import beef_pic from 'assets/images/beef.png';
import chicken_pic from 'assets/images/chicken.png';
import egg_pic from 'assets/images/egg1.png';
import fish_pic from 'assets/images/fish.png';
// import food_serve from 'assets/images/food_serving5.mp4';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [lunchItems, setLunchItems] = useState([]);
  const [dinnerItems, setDinnerItems] = useState([]);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate, () => {
      const currentDate = selectedDate.toISOString().split('T')[0];
      console.log(currentDate); // Check if the date is correct here
    });
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const currentDate = date.toISOString().split('T')[0];

        console.log(currentDate);
        const response = await axios.get(`http://localhost:3000/dining/${currentDate}`);

        setLunchItems(response.data.lunch);
        setDinnerItems(response.data.dinner);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [date]);



  return (
    <div className="page-container" style={{ position: 'relative', zIndex: '1' }}>
      <div className="videoMain">
        {/* <video src ={food_serve}autoPlay loop muted/> */}
        <br />
        <div className="content" style={{ marginTop: '20px' }}>
          <div className="row" style={{ position: 'relative', zIndex: '2' }}>
            <div className="column" style={{ color: '#673AB7' }}>
              <div className="calendar-container">
                <div className="calendar-header" style={{ color: '#673AB7' }}>
                  <h2>Dining <br /> Calendar</h2>
                </div>
                <div className="calendar-body" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', backgroundColor: '#edeafd' }}>
                  <Calendar
                    onChange={handleDateChange}
                    value={date}
                    className="custom-calendar"
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />

            <div className="flex-container">
              <div className="column" style={{ marginRight: '50px' }}>
                <div className="note-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', backgroundColor: '#edeafd', width: '300px' }}>
                  <h1 className="font-effect-outline" style={{ color: '#673AB7' }}>Lunch Item</h1>
                  <br />
                  <div className="note-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                    <br /><br />

                    {lunchItems.map((item, index) => (
                      <div key={index} style={{ textAlign: 'center', fontSize: '20px', paddingBottom: '15px' }}>
                        {item.name}
                      </div>

                    ))}
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="note-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', backgroundColor: '#edeafd', width: '300px' }}>
                  <h1 className="font-effect-outline" style={{ color: '#673AB7' }}>Dinner Item</h1>
                  <br />
                  <div className="note-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                    <br /><br />
                    {dinnerItems.map((item, index) => (
                      <div key={index} style={{ textAlign: 'center', fontSize: '20px', paddingBottom: '15px' }}>
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="row">
            <div className="column">
              <br />
              <br />
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
                    <img src={chicken_pic} className="w-100 h-100" alt="Media" style={{ objectFit: 'cover', }} />
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
                    <img src={fish_pic} className="w-100 h-100" alt="Media" style={{ objectFit: 'cover', }} />
                    <a href="#!">
                      <div className="mask" ></div>
                    </a>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
