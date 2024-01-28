// material-ui
import { Button } from '@mui/material';

// project imports
import React, { useState } from 'react';

import Newcomplaint from './Newcomplaint';
import Complaintcard from './Complaintcard';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [button_name, setButton_name] = useState("Add Complaint");
  //const [complaint_info, setComplaint_info] = useState([{}]);
  
  // variables for the card:
  // title = title of the card
  // details = details of the card
  // date = date of the card
  // status = status of the card
  // others info like room no, stu_id, etc. can be added as well
  
  const toggleDialog = () => {
    setIsOpen(!isOpen);
    if(isOpen){
      setButton_name("Add Complaint");
    }
    else{
      setButton_name("Close");
    }
  };

  return(
  <div>
    <div>
      <Button variant="contained" color="primary" style={{ marginTop: '0px',marginLeft:'1000px' }} onClick={toggleDialog}>
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

    </div>
    );
};

export default SamplePage;
