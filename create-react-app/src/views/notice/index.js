import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
const SamplePage = () => {
  const handleDownloadClick = (Title, createdAt, Text) => {
    // Store data in localStorage
    localStorage.setItem('noticeboardData', JSON.stringify({ Title, createdAt, Text }));

    // Navigate to the noticeboard module
    window.open('/free/noticeboard', '_self');
  };

  // State for storing card data
  const [cardData, setCardData] = useState([]);

  // Function to fetch card data from the database
  const fetchCardDataFromDatabase = async () => {
    console.log('hello');

    try {
      // Fetch data from your database API
      const response = await fetch('http://localhost:3000/notice');
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

  return (
    <div>
      {cardData.map((card, index) => (
        <React.Fragment key={index}>
<<<<<<< HEAD
          <MainCard title={card.title}>
            <Typography variant="body2">{card.text}</Typography>
            <Typography variant="caption" color="textSecondary" mt={2}>
              Date: {card.created_at}
            </Typography>
            <div style={{ marginBottom: '5px' }} />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '10px' }}
              onClick={() => handleDownloadClick(card.title, card.created_at, card.text)}
=======
          <MainCard title={card.title} style={{ boxShadow: '0 4px 8px rgba(0, 0, 255, 2.5)',fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '28px' }}>
            <Typography variant="body2" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px'}}>{card.text}</Typography>
            <Typography variant="caption" color="textSecondary" mt={2} style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '14px'}}>
              Date: {card.created_at}
            </Typography>
            <div style={{ marginBottom: '5px' }} />
            <Button 
              variant="outlined"
              type="button"
              id="cancel"
              name="cancel"
              className="btn btn-secondary mr-3"
              style={{
                marginTop: '10px',
                // marginLeft: '15px',
                fontSize: '1.1rem',
                fontFamily: 'Arial, sans-serif',
                borderRadius: '15px', // Adjust the border-radius for rounded corners
                height: '50px', // Adjust the height as needed
                // width: '150px',
                boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease-in-out',
                color:'white',
                backgroundColor: '#673AB7',
              }}
              onClick={() => handleDownloadClick(card.title, card.created_at, card.text)}
              onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
              onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white';}} // Change back to default color
>>>>>>> 8529f0c (admin basic frontend added)
            >
              View & Download
            </Button>
          </MainCard>
          {index < cardData.length - 1 && <div style={{ margin: '16px' }} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SamplePage;
