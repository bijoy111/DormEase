import beef_pic from 'assets/images/beef.png';
import chicken_pic from 'assets/images/chicken.png';
import egg_pic from 'assets/images/egg1.png';
import fish_pic from 'assets/images/fish.png';
// import food_serve from 'assets/images/food_serving5.mp4';
import { Button, Menu, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MainCard from 'ui-component/cards/MainCard';
import './style.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [lunchItems, setLunchItems] = useState([]);
  const [dinnerItems, setDinnerItems] = useState([]);
  const [newLunchItem, setNewLunchItem] = useState('');
  const [newDinnerItem, setNewDinnerItem] = useState('');

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
        console.log(response.data.lunch);
        setLunchItems(response.data.lunch);
        setDinnerItems(response.data.dinner);
      } catch (error) {
        setLunchItems([]);
        setDinnerItems([]);
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [date]);

  const addLunchItem = async () => {
    // setLunchItems([...lunchItems, { name: newLunchItem }]);
    // setNewLunchItem('');

    try {
      const currentDate = date.toISOString().split('T')[0];
      console.log(currentDate);
      const response = await axios.post(`http://localhost:3000/dining/${currentDate}/entry/meal`, {
        date: currentDate,
        name: newLunchItem,
        meal_time: 'lunch',
      }, { withCredentials: true });
      console.log(response);
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }

    // window.open('/free/dinning/default', '_self');
  };

  const addDinnerItem = async () => {
    // setDinnerItems([...dinnerItems, { name: newDinnerItem }]);
    // setNewDinnerItem('');

    try {
      const currentDate = date.toISOString().split('T')[0];
      console.log(currentDate);
      const response = await axios.post(`http://localhost:3000/dining/${currentDate}/entry/meal`, {
        date: currentDate,
        name: newDinnerItem,
        meal_time: 'Dinner',
      }, { withCredentials: true });
      console.log(response);
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
    // window.open('/free/dinning/default', '_self');
  };

  const handleNewLunchItemChange = (e) => {
    setNewLunchItem(e.target.value);
  };

  const handleNewDinnerItemChange = (e) => {
    setNewDinnerItem(e.target.value);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleBoxClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };



  // State for storing card data
  const [cardData, setCardData] = useState([]);

  // Function to fetch card data from the database
  const fetchCardDataFromDatabase = async () => {
    console.log('hello');

    try {
      // Fetch data from the database API
      const response = await fetch('http://localhost:3000/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });
      const data = await response.json();
      console.log(data);
      // Update the state with the fetched data
      setCardData(data);
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCardDataFromDatabase();
  }, []); // Empty dependency array ensures it only runs once on mount


  const Messmanager = cardData.mess_manager || '';
  console.log(Messmanager);




  return (
    <div className={`page-container ${menuOpen ? 'blur-background' : ''}`} style={{ position: 'relative', zIndex: '1' }}>
      <div className="videoMain">
        {/* <video src={food_serve} autoPlay loop muted /> */}
        <br />

        <div className="content" style={{ marginTop: '20px' }}>
          <div className="row" style={{ position: 'relative', zIndex: '2' }}>
            {Messmanager && (
              <>
                <Button
                  variant="outlined"
                  type="button"
                  id="filter"
                  name="filter"
                  className="btn btn-secondary mr-3"
                  style={{
                    marginTop: '5px',
                    marginBottom: '15px',
                    fontSize: '1rem',
                    fontFamily: 'Arial, sans-serif',
                    borderRadius: '15px',
                    height: '40px',
                    width: '160px',
                    boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease-in-out',
                    color: 'white',
                    backgroundColor: '#673AB7',
                  }}
                  onClick={handleBoxClick}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
                  onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                >
                  Transaction
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  PaperProps={{
                    className: 'menu-paper', // Assign the menu-paper class directly
                    style: {
                      height: '300px',
                      width: '450px',
                      backgroundColor: '#EDE7F6',
                      marginLeft: '0x',
                      marginTop: '15px',
                      transition: 'transform 0.5s ease-in-out',
                      transformStyle: 'preserve-3d',
                      perspective: '1000px',
                    },
                  }}
                  onMouseEnter={() => {
                    document.querySelector('.menu-paper').style.transform = 'rotateY(-10deg) scale(1.20)';
                  }}
                  onMouseLeave={() => {
                    document.querySelector('.menu-paper').style.transform = 'rotateY(0deg) scale(1)';
                  }}
                >
                  <MainCard title='21-02-2024' style={{ boxShadow: '0 4px 8px rgba(0, 0, 255, 2.5)', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '28px', padding: '20px', margin: '30px' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px' }}>
                      Amount : 10,000 BDT
                    </Typography>
                    <Typography variant="body2" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px' }}>
                      Paid By : Saiful Islam
                    </Typography>
                    <Typography variant="body2" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px' }}>
                      Received By : 1905052
                    </Typography>
                  </MainCard>
                  <MainCard title='26-02-2024' style={{ boxShadow: '0 4px 8px rgba(0, 0, 255, 2.5)', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '28px', padding: '20px', margin: '30px' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px' }}>
                      Amount : 15,000 BDT
                    </Typography>
                    <Typography variant="body2" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px' }}>
                      Paid By : Saiful Islam
                    </Typography>
                    <Typography variant="body2" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px' }}>
                      Received By : 1905052
                    </Typography>
                  </MainCard>
                </Menu>
              </>
            )}
            <div className="column" style={{ color: '#673AB7', marginRight: '370px' }}>
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
                {Messmanager && (
                  <>
                    <div className="items-container" style={{
                      marginLeft: '10px',
                      paddingLeft: '30px', paddingRight: '30px', border: '1px solid',
                      borderRadius: '5px'
                    }}>
                      <div className="item-section" style={{ height: '90px' }}>
                        <h3>Add Lunch Item:</h3>
                        <div className="item-input">
                          <input
                            type="text"
                            // className="form-control custom-input"
                            style={{ color: 'black', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', backgroundColor: 'transparent', border: '1px solid #4CAF50', borderRadius: '8px' }}
                            value={newLunchItem}
                            onChange={handleNewLunchItemChange}
                          />
                          {/* <button onClick={addLunchItem} style={{ cursor: 'pointer', marginTop: '5px' }}>Add</button> */}
                          <Button
                            variant="outlined"
                            type="button"
                            id="filter"
                            name="filter"
                            className="btn btn-secondary mr-3"
                            style={{
                              marginTop: '8px',
                              marginBottom: '15px',
                              fontSize: '1rem',
                              fontFamily: 'Arial, sans-serif',
                              borderRadius: '9px',
                              height: '25px',
                              width: '30px',
                              boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                              cursor: 'pointer',
                              transition: 'background-color 0.3s ease-in-out',
                              color: 'white',
                              backgroundColor: '#673AB7',
                            }}
                            onClick={() => addLunchItem()}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
                            onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                      <div className="item-section">
                        <h3>Add Dinner Item:</h3>
                        <div className="item-input">
                          <input
                            type="text"
                            // className="form-control custom-input"
                            style={{ color: 'black', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', backgroundColor: 'transparent', border: '1px solid #4CAF50', borderRadius: '8px' }}
                            value={newDinnerItem}
                            onChange={handleNewDinnerItemChange}
                          />
                          {/* <button onClick={addDinnerItem} style={{ cursor: 'pointer', marginTop: '5px' }}>Add</button> */}
                          <Button
                            variant="outlined"
                            type="button"
                            id="filter"
                            name="filter"
                            className="btn btn-secondary mr-3"
                            style={{
                              marginTop: '8px',
                              marginBottom: '25px',
                              fontSize: '1rem',
                              fontFamily: 'Arial, sans-serif',
                              borderRadius: '9px',
                              height: '25px',
                              width: '30px',
                              boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                              cursor: 'pointer',
                              transition: 'background-color 0.3s ease-in-out',
                              color: 'white',
                              backgroundColor: '#673AB7',
                            }}
                            onClick={() => addDinnerItem()}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
                            onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
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
                  <div className="note-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', height: '220px' }}>
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
                  <div className="note-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', height: '220px' }}>
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
          <br />
          <br />
          <br />
          <br />

          <div className="row">
            <div className="column" >
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