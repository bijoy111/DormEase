<<<<<<< HEAD
// material-ui
import { Button } from '@mui/material';
// project imports
import { useState } from 'react';

import Complaintcard from './Complaintcard';
import Newcomplaint from './Newcomplaint';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [button_name, setButton_name] = useState('Add Complaint');
  //const [complaint_info, setComplaint_info] = useState([{}]);

  // variables for the card:
  // title = title of the card
  // details = details of the card
  // date = date of the card
  // status = status of the card
  // others info like room no, stu_id, etc. can be added as well

  const toggleDialog = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setButton_name('Add Complaint');
    } else {
      setButton_name('Close');
    }
=======
import { Button, Menu } from '@mui/material';
import { useState } from 'react';
import Complaintcard from './Complaintcard';
import './style.css';
// ==============================|| Complaint PAGE ||============================== //

const SamplePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleApplyButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
>>>>>>> 8529f0c (admin basic frontend added)
  };

  return (
    <div>
      <div>
<<<<<<< HEAD
        <Button variant="contained" color="primary" style={{ marginTop: '0px', marginLeft: '1000px' }} onClick={toggleDialog}>
          {button_name}
        </Button>
        {isOpen && (
          <div className="dialog-overlay">
            <div className="dialog-content">
              {/* <span className="close" onClick={toggleDialog}>&times;</span> */}
              <Newcomplaint />
            </div>
          </div>
        )}
        <br></br>
        <h1>Your Complaints</h1>
      </div>

      <div>
        <Complaintcard />
      </div>
      <Complaintcard />
=======
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
                      borderRadius: '15px', // Adjust the border-radius for rounded corners
                      height: '50px', // Adjust the height as needed
                      width: '150px',
                      boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease-in-out',
                      color:'white',
                      backgroundColor: '#673AB7',
                    }}
                onClick={handleApplyButtonClick}
                onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
                onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white';}} // Change back to default color
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
                  style: {
                    height: '350px', 
                    width: '320px', // Set width
                    backgroundColor: '#EDE7F6', // Set background color
                    marginLeft: '45px',
                    
                  },
                }}
              >
                
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block',paddingLeft: '15px',paddingTop:'30px',paddingRight:'10px',}}>
                    <label htmlFor="dept" className="input-label" style={{ color: '#1E88E5',fontSize:'20px' }}>Title </label>
                    <input type="text" className="form-control custom-input" id="dept" value="" style={{ color: '#B2BEB5',paddingTop:'5px',paddingBottom:'5px',paddingLeft:'5px' }} />
                  </div>
                </div>
                {/* <br/> */}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block',paddingLeft: '15px',paddingTop:'30px',paddingRight:'10px', }}>
                    <label htmlFor="cause" className="input-label" style={{ color: '#1E88E5',fontSize:'20px' }}>Details </label>
                    <textarea className="form-control custom-input" id="cause" style={{ color: '#B2BEB5', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', width: '100%', minHeight: '80px' }}></textarea>
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
                      marginLeft: '15px',
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
        <br></br>
        <br/>
      </div>
      <br/>
      <div>
        <Complaintcard />
      </div>
      <br/>
      <div>
      <Complaintcard />
      </div>
>>>>>>> 8529f0c (admin basic frontend added)
    </div>
  );
};

export default SamplePage;
