<<<<<<< HEAD
import { Grid } from '@mui/material';
import logo from 'assets/images/student.png';
=======
import { Button } from "@material-tailwind/react";
import { Grid } from '@mui/material';
import logo from 'assets/images/student.png';
import React, { useEffect, useState } from 'react';
>>>>>>> 8529f0c (admin basic frontend added)
import MainCard from 'ui-component/cards/MainCard';
import './style.css';
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  integrity="sha384-3YFGMh3Hy9LlNfO63C3CcapF3Kf5c6Rr6s49peF8w7v69YFdVPMEvaybSj8e6xY2"
/>;
<<<<<<< HEAD
//document.body.style.overflow = 'hidden';
//document.body.style.height = '100%';
// ==============================|| SAMPLE PAGE ||============================== //

if (window.location.hostname === '/free/updateprofile') {
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100%';
}

const SamplePage = () => (
  <MainCard style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', overflow: 'hidden' }}>
    <Grid container spacing={3}>
      {/* Left Column */}
      <Grid item xs={12} sm={6} style={{ border: '2px solid #ccc', borderRadius: '0px', boxShadow: '0 4px 8px rgba(0,33,243, 2.5)' }}>
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
                      width: '150px',
                      height: '150px',
                      marginTop: '20px'
                    }}
                  />
                  <div style={{ marginLeft: '20px' }}>
                    <h3 className="user-name">Bijoy Ahmed Saiem</h3>
                    <h4 className="user-email">saiem.bijoy@gmail.com</h4>
                  </div>
                </div>
              </div>
              {/* Personal Details */}
              <div className="row gutters mx-auto left-spacing style={{ marginLeft: '100px' }}">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h2 className="mb-4 text-primary">Personal Information</h2>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4">
                    <label htmlFor="fullName" style={{ color: '#B2BEB5' }}>
                      Student Id:{' '}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter student id"
                      style={{ color: '#B2BEB5' }}
                      value="1905052"
                      readOnly
                    />
                  </div>
                </div>
                <br />
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4">
                    <label htmlFor="fullName" style={{ color: '#B2BEB5' }}>
                      Full Name:{' '}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter full name"
                      value="Bijoy Ahmed Saiem"
                      style={{ color: '#B2BEB5' }}
                      readOnly
                    />
                  </div>
                </div>
                <br />
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4">
                    <label htmlFor="eMail">Email: </label>
                    <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" value="saiem.bijoy@gmail.com" />
                  </div>
                </div>
                <br />
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4">
                    <label htmlFor="eMail">Phone: </label>
                    <input type="email" className="form-control" id="eMail" placeholder="Enter phone no" value="01700123540" />
                  </div>
                </div>
                <br />
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4">
                    <label htmlFor="eMail" style={{ color: '#B2BEB5' }}>
                      CGPA:{' '}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Enter cgpa"
                      value="3.5"
                      style={{ color: '#B2BEB5' }}
                      readOnly
                    />
                  </div>
                  <br />
                  <div className="form-group mt-4">
                    <label htmlFor="eMail">Old Password: </label>
                    <input type="password" className="form-control" id="eMail" placeholder="Enter old password" />
                  </div>
                  <br />
                  <div className="form-group mt-4">
                    <label htmlFor="password">New Password: </label>
                    <input type="email" className="form-control" id="eMail" placeholder="Enter new password" />
                  </div>
                </div>
                <br />
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4">
                    <label htmlFor="profilePicture">Change Picture: </label>
                    <input type="file" className="form-control-file" id="profilePicture" accept="image/*" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      {/* Right Column */}
      <Grid item xs={12} sm={6} style={{ border: '2px solid #ccc', borderRadius: '0px', boxShadow: '0 4px 8px rgba(0,33,243, 2.5)' }}>
        <div className="card h-100" style={{ padding: '20px' }}>
          {/* Academic Information */}
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="mt-4 mb-4 text-primary">Academic Information</h2>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group mt-4">
                <label htmlFor="eMail" style={{ color: '#B2BEB5' }}>
                  Deptartment:{' '}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="eMail"
                  placeholder="Enter your dept"
                  value="CSE"
                  style={{ color: '#B2BEB5' }}
                  readOnly
                />
              </div>
            </div>
            <br />
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group mt-4">
                <label htmlFor="eMail" style={{ color: '#B2BEB5' }}>
                  Level:{' '}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="eMail"
                  placeholder="Enter your dept"
                  value="4"
                  style={{ color: '#B2BEB5' }}
                  readOnly
                />
              </div>
            </div>
            <br />
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group mt-4">
                <label htmlFor="eMail" style={{ color: '#B2BEB5' }}>
                  Term:{' '}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="eMail"
                  placeholder="Enter your dept"
                  value="1"
                  style={{ color: '#B2BEB5' }}
                  readOnly
                />
              </div>
            </div>
          </div>
          {/* Guardian Information */}
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="mt-4 mb-4 text-primary">Guardian Information</h2>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group mt-4">
                <label htmlFor="Street">Name: </label>
                <input type="text" className="form-control" id="Street" placeholder="Enter name" value="Abidur Rahim" />
              </div>
            </div>
            <br />
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group mt-4">
                <label htmlFor="ciTy">Phone: </label>
                <input type="text" className="form-control" id="ciTy" placeholder="Enter phone no" value="01713654321" />
              </div>
            </div>
            {/* ... (similar modifications for other address form fields) ... */}
          </div>
          {/* Residential Information*/}
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="mt-4 mb-4 text-primary">Residential Information</h2>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group mt-4">
                <label htmlFor="Street" style={{ color: '#B2BEB5' }}>
                  Hall:{' '}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Street"
                  placeholder="Enter Street"
                  value="Sohrawardy"
                  style={{ color: '#B2BEB5' }}
                  readOnly
                />
              </div>
            </div>
            <br />
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group mt-4">
                <label htmlFor="ciTy" style={{ color: '#B2BEB5' }}>
                  Resident:{' '}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ciTy"
                  placeholder="Enter City"
                  value="Yes"
                  style={{ color: '#B2BEB5' }}
                  readOnly
                />
              </div>
            </div>
            <br />
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group mt-4">
                <label htmlFor="ciTy" style={{ color: '#B2BEB5' }}>
                  Room no:{' '}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ciTy"
                  placeholder="Enter City"
                  value="2001"
                  style={{ color: '#B2BEB5' }}
                  readOnly
                />
              </div>
            </div>
            <br />
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group mt-4">
                <label htmlFor="ciTy" style={{ color: '#B2BEB5' }}>
                  Seat no:{' '}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ciTy"
                  placeholder="Enter City"
                  value="1"
                  style={{ color: '#B2BEB5' }}
                  readOnly
                />
              </div>
            </div>
            <br />
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group mt-4">
                <label htmlFor="ciTy" style={{ color: '#B2BEB5' }}>
                  Applied for room:{' '}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ciTy"
                  placeholder="Enter City"
                  value="No"
                  style={{ color: '#B2BEB5' }}
                  readOnly
                />
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-center mr-3">
                <button
                  type="button"
                  id="cancel"
                  name="cancel"
                  className="btn btn-secondary mr-3"
                  style={{
                    marginTop: '20px',
                    fontSize: '1.1rem',
                    fontFamily: 'Arial, sans-serif',
                    backgroundColor: '',
                    boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  id="update"
                  name="update"
                  className="btn btn-primary"
                  style={{
                    marginTop: '20px',
                    marginLeft: '10px',
                    fontSize: '1.1rem',
                    fontFamily: 'Arial, sans-serif',
                    backgroundColor: '',
                    boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)'
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  </MainCard>
);

=======

// ==============================|| update profile ||============================== //

const SamplePage = () => {
  const [imagePreview, setImagePreview] = useState(null);
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


  const handleDownloadClick = () => {
    // Store data in localStorage
    // localStorage.setItem('noticeboardData', JSON.stringify({ Title, createdAt,Text }));

    // Navigate to the noticeboard module
    window.open('/free/updateprofile', '_self');

    // window.open('/free/pages/login/login3', '_self');
  };

  // State for storing card data
  const [cardData, setCardData] = useState([]);

  // Function to fetch card data from the database
  const fetchCardDataFromDatabase = async () => {
    console.log('hello');

    try {
      // Fetch data from your database API
      const response = await fetch('http://localhost:3000/notice', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
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

  // let studentName = '';
  {
    cardData.map((card, index) => (
      // Code inside the map function
      <React.Fragment key={index}>
        {/* {card.name} */}
        {/* {studentName=card.name} */}
      </React.Fragment>
    ));
  }

  let studentName = 'Bijoy Ahmed Saiem';

  return (
    <MainCard style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  overflow: 'hidden',paddingTop: '20px' }}>
      <Grid container spacing={3} style={{color:'green'}}>
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
                      <h3 className="user-name">Bijoy Ahmed Saiem</h3>
                      <h4 className="user-id">1905052</h4>
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
                        value="1905052"
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
                        value="saiem.bijoy@gmail.com"
                        placeholder="Enter phone no"
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
                        id="phone_no" placeholder="Enter your email" 
                        value="01700123540" 
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
                        value="3.5" 
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
                  <br/>
                  <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                     <label htmlFor="password" className="input-label">New Password: </label>
                     <input type="email" className="form-control custom-input" id="eMail" placeholder="Enter new password" />
                  </div>
                  <br />
                  <br/>
                  <br/>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" style={{marginRight:'60px'}}>
                    <div className="form-group mt-4">
                      <label htmlFor="profilePicture" className="form-label">Change Profile Picture:</label><br/>
                      <input type="file" className="form-control-file cursor-pointer" id="profilePicture" accept="image/*" aria-describedby="profilePictureHelp" onChange={handleFileChange}  />
                      <small id="profilePictureHelp" className="form-text text-muted"></small>
                    </div>
                  </div>

                  {imagePreview && (
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <br/>
                      <label htmlFor="profilePreview">Preview</label>
                      <img 
                        src={imagePreview} 
                        alt="Profile Preview" 
                        style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px',paddingRight:'25px' }}
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
            {/* <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/> 
            <br/> */}
            {/* Academic Information */}
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{marginRight:'60px'}}>
                      <h2 className="mt-4 mb-4 text-primary">Academic Information</h2>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                        <label htmlFor="dept" className="input-label" style={{ color: '#B2BEB5' }}>Dept </label>
                        <input type="text" className="form-control custom-input" id="dept" value="CSE" style={{ color: '#B2BEB5' }} readOnly />
                      </div>
                    </div>
                    <br />
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                        <label htmlFor="level" className="input-label" style={{ color: '#B2BEB5' }}>Level </label>
                        <input type="text" className="form-control custom-input" id="level" value="4" style={{ color: '#B2BEB5' }} readOnly />
                      </div>
                    </div>
                    <br />
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                        <label htmlFor="term" className="input-label" style={{ color: '#B2BEB5' }}>Term </label>
                        <input type="text" className="form-control custom-input" id="term" placeholder="Enter your dept" value="1" style={{ color: '#B2BEB5' }} readOnly />
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
                  <input type="text" className="form-control custom-input" id="guardian_name" value="Abidur Rahim" />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="phone_no" className="input-label">Phone </label>
                  <input type="tel" className="form-control custom-input" id="phone_no" value="01713654321" />
                </div>
              </div>
              {/* ... (similar modifications for other address form fields) ... */}
            </div>
            {/* Residential Information*/}
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h2 className="mt-4 mb-4 text-primary">Residential Information</h2>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="hall" className="input-label" style={{ color: '#B2BEB5' }}>Hall </label>
                  <input type="text" className="form-control custom-input" id="hall" value="Sohrawardy" style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="resident" className="input-label" style={{ color: '#B2BEB5' }}>Resident </label>
                  <input type="text" className="form-control custom-input" id="resident" value="Yes" style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="room" className="input-label" style={{ color: '#B2BEB5' }}>Room no: </label>
                  <input type="text" className="form-control custom-input" id="room" value="2001" style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="seat" className="input-label" style={{ color: '#B2BEB5' }}>Seat no: </label>
                  <input type="text" className="form-control custom-input" id="seat" value="1" style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
              <br />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block' }}>
                  <label htmlFor="apply" className="input-label" style={{ color: '#B2BEB5' }}>Applied for room: </label>
                  <input type="text" className="form-control custom-input" id="apply" value="No" style={{ color: '#B2BEB5' }} readOnly />
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-center mr-8">
                  <br/>
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
>>>>>>> 8529f0c (admin basic frontend added)
export default SamplePage;
