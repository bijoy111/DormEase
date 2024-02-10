import { Button, Menu } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Complaintcard from './Complaintcard';
import './style.css';
// ==============================|| Complaint PAGE ||============================== //

const SamplePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const handleApplyButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async () => {
    console.log(details);
    try {
      const response = await axios.post('http://localhost:3000/complaint/compose', {
        title: title,
        text: details
      }, { withCredentials: true });
      console.log('Complaint submitted:', response.data);

      setTitle('');
      setDetails('');
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }

    window.open('/free/complaint/default', '_self');
  };

  return (
    <div>
      <div>
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
            width: '150px',
            boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            color: 'white',
            backgroundColor: '#673AB7',
          }}
          onClick={handleApplyButtonClick}
          onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
        >
          Add Complaint
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
              height: '340px',
              width: '307px',
              backgroundColor: '#EDE7F6',
              marginLeft: '0px',
              marginTop: '35px',
              transition: 'transform 0.5s ease-in-out', //  transition for smooth effect
              transformStyle: 'preserve-3d', // Preserve 3D transformations
              perspective: '1000px', // adding perspective for 3D effect
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
            <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block', paddingLeft: '25px', paddingTop: '30px', paddingRight: '35px', }}>
              <label htmlFor="dept" className="input-label" style={{ color: 'black', fontSize: '20px' }}>Title </label>
              <input type="text" className="form-control custom-input" id="dept" value={title} style={{ color: 'black', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', backgroundColor: 'transparent' }} onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>
          {/* <br/> */}
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block', paddingLeft: '25px', paddingTop: '30px', paddingRight: '35px', }}>
              <label htmlFor="cause" className="input-label" style={{ color: 'black', fontSize: '20px' }}>Details </label>
              <textarea className="form-control custom-input" id="cause" value={details} style={{ color: 'black', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', width: '100%', minHeight: '80px', backgroundColor: 'transparent' }} onChange={(e) => setDetails(e.target.value)} />
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
        </Menu>
        <br></br>
        <br />
      </div>
      <br />
      <div>
        <Complaintcard />
      </div>
    </div>
  );
};

export default SamplePage;
