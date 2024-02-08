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
