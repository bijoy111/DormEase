import { Button, Typography } from '@mui/material';
import ProgressBar from './Progressbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const Complaintcard = () => {
  return (
    <div>
      <MainCard title="Light is not working in room no. 505">
        <Typography variant="body2">
          <b>Details :</b> Please fix the light in room no. 505 as soon as possible.{/* Replace with your actual details */}
        </Typography>
        <Typography variant="caption" color="textSecondary" mt={2}>
          <b>Complaint Submitted On :</b> January 25, 2024 {/* Replace with your actual date */}
        </Typography>
        <div>
          <h4>Status : </h4>
          <ProgressBar /> {/* Replace with your actual status */}
        </div>
        <div style={{ marginBottom: '5px' }} />
        <br></br>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
          onClick={() => {
            window.open('/free/noticeboard', '_self');
          }}
        >
          Remove Complaint
        </Button>
      </MainCard>
      <div style={{ margin: '16px' }} />
    </div>
  );
};

export default Complaintcard;
