import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, Button, Grid, Menu, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

import GiteOutlined from '@mui/icons-material/GiteOutlined';
import LocalHotelOutlined from '@mui/icons-material/LocalHotelOutlined';
import './roomChange.css';

import { useEffect } from 'react';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ==============================|| DASHBOARD - ROOM AND SEAT SHOWING CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading }) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };

  const handleApplyButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
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
  const roomNo = cardData.room_no || '';
  const seatNo = cardData.seat_no || '';
  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <br />
                <br />
                <Grid container justifyContent="space-between">
                  <br />
                  <br />
                  <Grid item>
                    <Button
                      disableElevation
                      variant={timeValue ? 'contained' : 'text'}
                      size="large"
                      sx={{ color: 'inherit' }}
                      onClick={(e) => handleChangeTime(e, true)}
                    >
                      Room
                    </Button>
                    <Button
                      disableElevation
                      variant={!timeValue ? 'contained' : 'text'}
                      size="large"
                      sx={{ color: 'inherit' }}
                      onClick={(e) => handleChangeTime(e, false)}
                    >
                      Seat
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>
                        {timeValue ? (
                          <Typography sx={{ fontSize: '2.5rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{roomNo}</Typography>
                        ) : (
                          <Typography sx={{ fontSize: '2.5rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{seatNo}</Typography>
                        )}
                      </Grid>

                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: '1.4rem',
                            fontWeight: 500,
                            color: theme.palette.primary[200],
                          }}
                        >
                          Resident
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <br />
                    {timeValue ? (
                      <GiteOutlined sx={{ fontSize: 100, color: theme.palette.primary[200] }} />
                    ) : (
                      <LocalHotelOutlined sx={{ fontSize: 100, color: theme.palette.primary[200] }} />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid></Grid>

            {/* <br /> */}

            <Grid item>
              <Button
                disableElevation
                variant={timeValue ? 'contained' : 'text'}
                size="large"
                sx={{ color: 'inherit', backgroundColor: '#0066cc', fontSize: '20px', fontFamily: 'Helvetica, Arial, sans-serif' }}
                onClick={handleApplyButtonClick}
              >
                Apply
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
                    height: '330px', // Set maximum height
                    width: '307px', // Set width
                    backgroundColor: '#EDE7F6', // Set background color
                    // backgroundColor: '#D4A537', // Set background color
                    marginLeft: '45px',
                    transition: 'transform 0.5s ease-in-out', // Add transition for smooth effect
                    transformStyle: 'preserve-3d', // Preserve 3D transformations
                    perspective: '1000px', // Add perspective for 3D effect
                    boxShadow: '0px 4px 8px rgba(88, 68, 22, 1.5)',
                  },
                }}
                onMouseEnter={() => {
                  document.querySelector('.menu-paper').style.transform = 'rotateY(-10deg) scale(1.20)';
                }}
                onMouseLeave={() => {
                  document.querySelector('.menu-paper').style.transform = 'rotateY(0deg) scale(1)';
                }}
              >
                
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block',paddingLeft: '25px',paddingTop:'30px',paddingRight:'35px',}}>
                    <label htmlFor="dept" className="input-label" style={{ color: 'black',fontSize:'20px' }}>Expected Room No. </label>
                    <input type="text" className="form-control custom-input" id="dept" value="" style={{ color: 'black',paddingTop:'5px',paddingBottom:'5px',paddingLeft:'5px',backgroundColor:'transparent',borderColor:'black' }} />
                  </div>
                </div>
                {/* <br/> */}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block',paddingLeft: '25px',paddingTop:'30px',paddingRight:'35px', }}>
                    <label htmlFor="cause" className="input-label" style={{ color: 'black',fontSize:'20px' }}>Cause </label>
                    <textarea className="form-control custom-input" id="cause" style={{ color: 'black', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', width: '100%', minHeight: '80px',backgroundColor:'transparent',borderColor:'black' }}></textarea>
                  </div>
                </div>

                 <Button 
                    variant="outlined"
                    type="button"
                    id="cancel"
                    name="cancel"
                    className="btn btn-secondary mr-3"
                    style={{
                      marginTop: '20px',
                      marginLeft: '25px',
                      fontSize: '1.1rem',
                      fontFamily: 'Arial, sans-serif',
                      borderRadius: '15px', // Adjust the border-radius for rounded corners
                      height: '50px', // Adjust the height as needed
                      width: '100px',
                      boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease-in-out',
                      color:'white',
                      backgroundColor: '#673AB7',
                    }}
                    onClick={() => handleDownloadClick()}
                    onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
                    onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white';}} // Change back to default color
                  >
                    Submit
                  </Button>
              </Menu>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalOrderLineChartCard;
