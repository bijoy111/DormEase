import { Button, Typography } from '@mui/material';
import ProgressBar from './Progressbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const Complaintcard = () => {
  return (
    <div>
<<<<<<< HEAD
      <MainCard title="Light is not working in room no. 505">
        <Typography variant="body2">
          <b>Details :</b> Please fix the light in room no. 505 as soon as possible.{/* Replace with your actual details */}
        </Typography>
        <Typography variant="caption" color="textSecondary" mt={2}>
=======
      <MainCard title="Light is not working in room no. 505" style={{ boxShadow: '0 4px 8px rgba(0, 0, 255, 2.5)',fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px' }}>
        <Typography variant="body2" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px'}}> 
          <b>Details :</b> Please fix the light in room no. 505 as soon as possible.{/* Replace with your actual details */}
        </Typography>
        <Typography variant="caption" color="textSecondary" mt={2} style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '14px'}}>
>>>>>>> 8529f0c (admin basic frontend added)
          <b>Complaint Submitted On :</b> January 25, 2024 {/* Replace with your actual date */}
        </Typography>
        <div>
          <h4>Status : </h4>
          <ProgressBar /> {/* Replace with your actual status */}
        </div>
        <div style={{ marginBottom: '5px' }} />
        <br></br>
        <Button
<<<<<<< HEAD
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
          onClick={() => {
            window.open('/free/noticeboard', '_self');
          }}
        >
          Remove Complaint
=======
          variant="outlined"
                    type="button"
                    id="cancel"
                    name="cancel"
                    className="btn btn-secondary mr-3"
                    style={{
                      marginTop: '20px',
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
          onClick={() => {
            window.open('/free/noticeboard', '_self');
          }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
                onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white';}} // Change back to default color
        >
          Remove
>>>>>>> 8529f0c (admin basic frontend added)
        </Button>
      </MainCard>
      <div style={{ margin: '16px' }} />
    </div>
  );
};

export default Complaintcard;
