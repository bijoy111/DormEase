import { Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import ProgressBar from './Progressbar';
const Complaintcard = () => {

  // State for storing card data
  const [cardData, setCardData] = useState([]);

  // Function to fetch card data from the database
  const fetchCardDataFromDatabase = async () => {
    console.log('hello');
    try {
      // Fetch data from the database API
      const response = await fetch('http://localhost:3000/complaint', {
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

    console.log('hello');
  };



  // Function to delete a complaint
  const handleRemoveComplaint = async (id) => {
    try {
      // Send a delete request to the backend
      const response = await axios.delete(`http://localhost:3000/complaint/delete/${id}`, {
        withCredentials: true,
      });

      console.log(response.data);
      // Update the state to remove the deleted complaint
      setCardData(cardData.filter(complaint => complaint.id !== id));
    } catch (error) {
      console.error('Error removing complaint:', error);
    }

    window.open('/free/complaint/default', '_self');
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCardDataFromDatabase();
  }, []); // Empty dependency array ensures it only runs once on mount


  return (
    <div>
      {cardData.map((card, index) => (

        <React.Fragment key={index}>
          <MainCard title={card.title} style={{ boxShadow: '0 4px 8px rgba(0, 0, 255, 2.5)', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px' }}>
            <Typography variant="body2" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px' }}>
              <b>Details :</b> {card.body}
            </Typography>
            <Typography variant="caption" color="textSecondary" mt={2} style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '14px' }}>
              <b>Complaint Submitted On :</b> {card.created_at}
            </Typography>
            <div>
              <h4>Status : </h4>
              {/* <ProgressBar />  */}
              <ProgressBar initialProgress={card.stage} />
            </div>
            <div style={{ marginBottom: '5px' }} />
            <br></br>
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
              onClick={() => handleRemoveComplaint(card.complaint_id)} // Pass the complaint ID to the removal function

              onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
              onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
            >
              Remove
            </Button>
          </MainCard>
          <div style={{ margin: '16px' }} />
          {index < cardData.length - 1 && <div style={{ margin: '16px' }} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Complaintcard;
