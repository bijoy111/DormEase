// material-ui
import { Button, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <div>
    <MainCard title="Generel Notice">
      <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa...
      </Typography>
      <Typography variant="caption" color="textSecondary" mt={2}>
        Date: January 25, 2024 {/* Replace with your actual date */}
      </Typography>
      <div style={{ marginBottom: '5px' }} />
      <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={() => {window.open("/free/noticeboard","_self")}}>
        View & Download
      </Button>
    </MainCard>
    <div style={{ margin: '16px' }} />
    <MainCard title="Upcoming Events">
      <Typography variant="body2">
      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa...
      </Typography>
      <Typography variant="caption" color="textSecondary" mt={2}>
        Date: January 25, 2024 {/* Replace with your actual date */}
      </Typography>
      <div style={{ marginBottom: '5px' }} />
     
      <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
        View & Download
      </Button>
      
    </MainCard>
    <div style={{ margin: '16px' }} />
      <MainCard title="News & Updates">
        <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa...
        </Typography>
        <Typography variant="caption" color="textSecondary" mt={2}>
        Date: January 25, 2024 {/* Replace with your actual date */}
      </Typography>
      <div style={{ marginBottom: '5px' }} />
      <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
        View & Download
      </Button>
      </MainCard>
    <div style={{ margin: '16px' }} />
      <MainCard title="Generel Notice">
        <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa...
        </Typography>
        <Typography variant="caption" color="textSecondary" mt={2}>
        Date: January 25, 2024 {/* Replace with your actual date */}
      </Typography>
      <div style={{ marginBottom: '5px' }} />
      <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
        View & Download
      </Button>
      </MainCard>
    

    </div>
);

export default SamplePage;
