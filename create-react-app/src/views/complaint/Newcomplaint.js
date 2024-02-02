import { Button, InputAdornment } from '@mui/material';
import { useState } from 'react';
import './Newcomplaint.css';

const ComplaintForm = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Title:', title);
    console.log('Details:', details);
    // Reset form fields
    setTitle(title);
    setDetails(details);

    // Redirect to home page after submission

    window.open('/free/complaint/default', '_self');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter New Complaint Info</h3>
      <div>
        <label htmlFor="title">
          <b>Title: </b>
        </label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        <InputAdornment position="start"></InputAdornment>
      </div>
      <br></br>
      <div>
        <label htmlFor="details">
          <b>Details: </b>
        </label>
        <textarea id="details" value={details} onChange={handleDetailsChange} required></textarea>
      </div>
      <br></br>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ComplaintForm;
