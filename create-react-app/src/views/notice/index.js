import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import MainCard from 'ui-component/cards/MainCard';
const options = [
  { value: 1, label: 'Personal Notice' },
  { value: 2, label: 'Generel Notice' },
];
const SamplePage = () => {
  const [cardHovered, setCardHovered] = useState(null);
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


  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  return (
    <div>
      <div className="select-container" style={{ marginLeft: '115px', marginRight: '115px' }}>
        <Select
          options={options}
          value={selectedOptions}
          onChange={handleChange}
          isMulti={true}
        />
      </div>
      <Button
        variant="outlined"
        type="button"
        id="filter"
        name="filter"
        className="btn btn-secondary mr-3"
        style={{
          marginTop: '10px',
          marginLeft: '115px',
          marginBottom: '15px',
          fontSize: '1rem',
          fontFamily: 'Arial, sans-serif',
          borderRadius: '10px',
          height: '35px',
          width: '70px',
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
        Filter
      </Button>
      <br />
      {cardData.map((card, index) => (
        <React.Fragment key={index}>
          <MainCard title={card.title} style={{ boxShadow: '0 4px 8px rgba(0, 0, 255, 2.5)', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '28px', backgroundColor: cardHovered === index ? 'transparent' : '#EDE7F6', cursor: 'pointer', color: cardHovered === index ? 'black' : 'black', width: '80%', margin: 'auto' }}
            onMouseEnter={() => setCardHovered(index)} // Set index when mouse enters
            onMouseLeave={() => setCardHovered(null)} // Reset when mouse leaves
          >
            <Typography variant="body2" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', color: cardHovered === index ? 'black' : 'black', }}>{card.text.length > 35 ? card.text.substring(0, 35) + '...' : card.text}</Typography>
            <Typography variant="caption" color="textSecondary" mt={2} style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '14px', color: cardHovered === index ? 'black' : 'black', }}>
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
                fontSize: '1.1rem',
                fontFamily: 'Arial, sans-serif',
                borderRadius: '15px',
                height: '50px',
                // width: '150px',
                boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease-in-out',
                color: 'white',
                backgroundColor: '#673AB7',
              }}
              onClick={() => handleDownloadClick(card.title, card.created_at, card.text)}
              onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
              onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
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
