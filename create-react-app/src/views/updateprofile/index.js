import { Button } from "@material-tailwind/react";
import { Grid } from '@mui/material';
import logo from 'assets/images/student.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import './style.css';
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  integrity="sha384-3YFGMh3Hy9LlNfO63C3CcapF3Kf5c6Rr6s49peF8w7v69YFdVPMEvaybSj8e6xY2"
/>;

// ==============================|| update profile ||============================== //

const SamplePage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [Phone, setPhone] = useState('');
  const [studentEmail, setEmail] = useState('');
  // const [guardianName, setGuardianname] = useState('');
  // const [guardianPhone, setGuardianphone] = useState('');
  // const [picture,setPicture] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  // State for storing card data
  const [cardData, setCardData] = useState([]);

  // Function to fetch card data from the database
  const fetchCardDataFromDatabase = async () => {
    console.log('hello');

    try {
      // Fetch data from the database API
      const response = await fetch('http://localhost:3000/dashboard', {
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
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCardDataFromDatabase();
  }, []); // Empty dependency array ensures it only runs once on mount

  const studentId = cardData.stu_id || '';
  const studentName = cardData.name || '';
  const Dept = cardData.dept || '';
  const levelTerm = cardData.level_term || '';
  const [Level, Term] = levelTerm.split('-');
  const Cgpa = cardData.cgpa || '';
  const Hall = cardData.hall || '';
  const Resident = cardData.resident || '';
  const guardianName = cardData.guardian_name || '';
  const guardianPhone = cardData.guardian_phone || '';
  const roomNo = cardData.room_no || '';
  const seatNo = cardData.seat_no || '';
  const Apply = cardData.applied_for_room || '';
  const photo = logo;


  // Function to handle form submission
  const handleSubmit = async () => {
    const obj = {
      email: studentEmail,
      phone: Phone,
      photo: photo,
      guardian_name: guardianName,
      guardian_phone: guardianPhone,
    }

    console.log(obj);
    try {
      // Send a POST request to your backend server with the updated email and phone
      const response = await axios.put('http://localhost:3000/dashboard/edit', obj, { withCredentials: true });

      // Handle success response
      console.log('Data updated successfully:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error updating data:', error);
    }

    window.open('/free/viewprofile', '_self');
  };

  return (
    <MainCard style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', paddingTop: '20px' }}>
      <Grid container spacing={3} style={{ color: 'green' }}>
        {/* Left Column */}
        <Grid item xs={12} sm={6} style={{ border: '2px solid #ccc', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0,33,243, 2.5)', width: '50%' }}>
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile text-left">
                  <div className="user-avatar left animated-image" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={logo}
                      alt=""
                      style={{
                        borderRadius: '50%',
                        border: '2px solid grey',
                        width: '100px',
                        height: '100px',
                        marginTop: '20px'
                      }}
                    />
                    <div style={{ marginLeft: '8px' }}>
                      <h3 className="user-name">{studentName}</h3>
                      <h4 className="user-id">{studentId}</h4>
                    </div>
                  </div>
                </div>
                {/* Personal Details */}
                <div className="row gutters mx-auto left-spacing style={{ marginLeft: '100px' }}">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2 className="mb-4 text-primary">Personal Information</h2>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                      <label htmlFor="student_id" className="input-label" style={{ color: '#B2BEB5' }}>Student ID</label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="student_id"
                        value={studentId}
                        style={{ color: '#B2BEB5' }}
                        readOnly
                      />
                    </div>
                  </div>

                  <br />
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                      <label htmlFor="full_name" className="input-label" style={{ color: '#B2BEB5' }}>Full Name </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="full_name"
                        value={studentName}
                        style={{ color: '#B2BEB5' }}
                        readOnly
                      />
                    </div>
                  </div>
                  <br />
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                      <label htmlFor="email" className="input-label">Email </label>
                      <input
                        type="email"
                        className="form-control custom-input"
                        id="email"
                        value={studentEmail}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                      <label htmlFor="phone_no" className="input-label">Phone </label>
                      <input
                        type="tel"
                        className="form-control custom-input"
                        id="phone_no" placeholder="Enter your phone number"
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                      <label htmlFor="cgpa" className="input-label" style={{ color: '#B2BEB5' }}>CGPA: </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="cgpa"
                        value={Cgpa}
                        style={{ color: '#B2BEB5' }}
                        readOnly
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                    <label htmlFor="eMail" className="input-label">Old Password: </label>
                    <input type="password" className="form-control custom-input" id="eMail" placeholder="Enter old password" />
                  </div>
                  <br />
                  <br />
                  <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                    <label htmlFor="password" className="input-label">New Password: </label>
                    <input type="email" className="form-control custom-input" id="eMail" placeholder="Enter new password" />
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" style={{ marginRight: '60px' }}>
                    <div className="form-group mt-4">
                      <label htmlFor="profilePicture" className="form-label">Change Profile Picture:</label><br />
                      <input type="file" className="form-control-file cursor-pointer" id="profilePicture" accept="image/*" aria-describedby="profilePictureHelp" onChange={handleFileChange} />
                      <small id="profilePictureHelp" className="form-text text-muted"></small>
                    </div>
                  </div>

                  {imagePreview && (
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <br />
                      <label htmlFor="profilePreview">Preview</label>
                      <img
                        src={imagePreview}
                        alt="Profile Preview"
                        style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px', paddingRight: '25px' }}
                      />
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </Grid>
        {/* Right Column */}
        <Grid item xs={12} sm={6} style={{ border: '2px solid #ccc', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0,33,243, 2.5)', width: '50%' }}>
          <div className="card h-100" style={{ padding: '20px' }}>
            {/* Academic Information */}
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ marginRight: '60px' }}>
                <h2 className="mt-4 mb-4 text-primary">Academic Information</h2>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="dept" className="input-label" style={{ color: '#B2BEB5' }}>Dept </label>
                  <input type="text" className="form-control custom-input" id="dept" value={Dept} style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="level" className="input-label" style={{ color: '#B2BEB5' }}>Level </label>
                  <input type="text" className="form-control custom-input" id="level" value={Level} style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="term" className="input-label" style={{ color: '#B2BEB5' }}>Term </label>
                  <input type="text" className="form-control custom-input" id="term" placeholder="Enter your dept" value={Term} style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
            </div>
            {/* Guardian Information */}
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h2 className="mt-4 mb-4 text-primary">Guardian Information</h2>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="guardian_name" className="input-label">Name </label>
                  <input type="text" className="form-control custom-input" id="guardian_name" value={guardianName} />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="phone_no" className="input-label">Phone </label>
                  <input type="tel" className="form-control custom-input" id="phone_no" value={guardianPhone} />
                </div>
              </div>
            </div>
            {/* Residential Information*/}
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h2 className="mt-4 mb-4 text-primary">Residential Information</h2>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="hall" className="input-label" style={{ color: '#B2BEB5' }}>Hall </label>
                  <input type="text" className="form-control custom-input" id="hall" value={Hall} style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="resident" className="input-label" style={{ color: '#B2BEB5' }}>Resident </label>
                  <input type="text" className="form-control custom-input" id="resident" value={Resident} style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="room" className="input-label" style={{ color: '#B2BEB5' }}>Room no: </label>
                  <input type="text" className="form-control custom-input" id="room" value={roomNo} style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="seat" className="input-label" style={{ color: '#B2BEB5' }}>Seat no: </label>
                  <input type="text" className="form-control custom-input" id="seat" value={seatNo} style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="apply" className="input-label" style={{ color: '#B2BEB5' }}>Applied for room: </label>
                  <input type="text" className="form-control custom-input" id="apply" value={Apply} style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-center mr-8">
                  <br />
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
                    onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
                    onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                  >
                    Cancel
                  </Button>

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
                    Save
                  </Button>

                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </MainCard>
  );
};
export default SamplePage;
