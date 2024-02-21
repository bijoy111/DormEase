//bijoy 111
import beef_pic from 'assets/images/beef.png';
import chicken_pic from 'assets/images/chicken.png';
import egg_pic from 'assets/images/egg1.png';
import fish_pic from 'assets/images/fish.png';
// import food_serve from 'assets/images/food_serving5.mp4';
import { Button, Menu } from '@mui/material';
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

    const applicable = true;


    return (

        <div className={`page-container ${menuOpen ? 'blur-background' : ''}`} style={{ position: 'relative', zIndex: '1' }}>
            <div className="videoMain">
                {/* <video src={food_serve} autoPlay loop muted /> */}
                <br />
                <div className="content" style={{ marginTop: '20px' }}>
                    <div className="row" style={{ position: 'relative', zIndex: '2' }}>
                        {applicable && (<Button
                            variant="outlined"
                            type="button"
                            id="filter"
                            name="filter"
                            className="btn btn-secondary mr-3"
                            style={{
                                marginTop: '5px',
                                marginBottom: '15px',
                                marginLeft: '175px',
                                fontSize: '1rem',
                                fontFamily: 'Arial, sans-serif',
                                borderRadius: '15px',
                                height: '40px',
                                width: '260px',
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
                            Apply for Mess Manager
                        </Button>)}
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
                                    height: '340px',
                                    width: '450px',
                                    backgroundColor: '#EDE7F6',
                                    marginLeft: '0x',
                                    marginTop: '15px',
                                    transition: 'transform 0.5s ease-in-out',
                                    transformStyle: 'preserve-3d',
                                    perspective: '1000px',
                                    padding: '30px',
                                },
                            }}
                            onMouseEnter={() => {
                                document.querySelector('.menu-paper').style.transform = 'rotateY(-10deg) scale(1.20)';
                            }}
                            onMouseLeave={() => {
                                document.querySelector('.menu-paper').style.transform = 'rotateY(0deg) scale(1)';
                            }}
                        >

                            <div>
                                <label htmlFor="pid" className="input-label" style={{ color: 'black', fontSize: '20px', paddingBottom: '20px' }}>Preferred Partner Id</label><br />
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    style={{ color: 'black', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', backgroundColor: 'transparent', border: '1px solid #4CAF50', borderRadius: '8px' }}
                                    id="pid"
                                    value={''}
                                // onChange={(e) => setCGPA(e.target.value)}
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="exp" className="input-label" style={{ color: 'black', fontSize: '20px' }}>Previous Experience</label>
                                <textarea
                                    className="form-control custom-input"
                                    style={{ color: 'black', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', width: '100%', minHeight: '80px', backgroundColor: 'transparent' }}
                                    rows={3}
                                    cols={46}
                                    id="exp"
                                    value={''}
                                // onChange={(e) => setReason(e.target.value)}
                                />
                            </div>
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-center mr-8">
                                        <Button
                                            variant="outlined"
                                            type="button"
                                            id="cancel"
                                            name="cancel"
                                            className="btn btn-secondary mr-3"
                                            style={{
                                                marginTop: '20px',
                                                fontSize: '1.1rem',
                                                fontFamily: 'Arial, sans-serif',
                                                borderRadius: '15px',
                                                height: '50px',
                                                width: '100px',
                                                boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s ease-in-out',
                                                color: 'white',
                                                backgroundColor: '#673AB7',
                                            }}
                                            onClick={() => closeChangeModal()}
                                            onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
                                            onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            type="button"
                                            id="cancel"
                                            name="cancel"
                                            className="btn btn-secondary mr-3"
                                            style={{
                                                marginTop: '20px',
                                                marginLeft: '15px',
                                                fontSize: '1.1rem',
                                                fontFamily: 'Arial, sans-serif',
                                                borderRadius: '15px',
                                                height: '50px',
                                                width: '100px',
                                                boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s ease-in-out',
                                                color: 'white',
                                                backgroundColor: '#673AB7',
                                            }}
                                            onClick={() => handleSubmit()}
                                            onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
                                            onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </Menu>
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