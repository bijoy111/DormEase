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
    </div>
  );
};

export default SamplePage;
