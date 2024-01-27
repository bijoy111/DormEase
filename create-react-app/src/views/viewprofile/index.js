import { Grid } from '@mui/material';
import logo from 'assets/images/student.png';
import MainCard from 'ui-component/cards/MainCard';
import './style.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha384-3YFGMh3Hy9LlNfO63C3CcapF3Kf5c6Rr6s49peF8w7v69YFdVPMEvaybSj8e6xY2" />
//document.body.style.overflow = 'hidden';
//document.body.style.height = '100%';
// ==============================|| SAMPLE PAGE ||============================== //

const handleDownloadClick = (Title, createdAt,Text) => {
    // Store data in localStorage
    localStorage.setItem('noticeboardData', JSON.stringify({ Title, createdAt,Text }));

    // Navigate to the noticeboard module
    window.open('/free/updateprofile', '_self');
  };

const SamplePage = () => (
  <MainCard style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh',overflow: 'hidden' }}>

    <Grid container spacing={3}>
      {/* Left Column */}
      <Grid item xs={12} sm={6} style={{ border: '2px solid #ccc', borderRadius: '0px',boxShadow: '0 4px 8px rgba(0,33,243, 2.5)' }}>
        <div className="card h-100">
          <div className="card-body">
            <div className="account-settings">
              <div className="user-profile text-left">
                <div className="user-avatar left animated-image" style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={logo}
                    alt=""
                    style=
                    {{
                      borderRadius: '50%',
                      border: '2px solid grey',
                      width: '100px',
                      height: '100px',
                      marginTop: '20px',
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
                    <label htmlFor="fullName">Student Id: </label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter student id"value="1905052" readOnly />
                  </div>
                </div>
                <br/>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4">
                    <label htmlFor="fullName">Full Name: </label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter full name" value="Bijoy Ahmed Saiem" readOnly/>
                  </div>
                </div>
                <br/>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4">
                    <label htmlFor="eMail">Email: </label>
                    <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" value="saiem.bijoy@gmail.com" readOnly />
                  </div>
                </div>
                <br/>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4">
                    <label htmlFor="eMail">Phone: </label>
                    <input type="email" className="form-control" id="eMail" placeholder="Enter phone no" value="01700123540" readOnly/>
                  </div>
                </div>
                <br/>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group mt-4">
                    <label htmlFor="eMail">CGPA: </label>
                    <input type="email" className="form-control" id="eMail" placeholder="Enter cgpa"value="3.5" readOnly />
                  </div>
                </div>
                <br/>
              </div> 
            </div>  
          </div>
        </div>
      </Grid>
      {/* Right Column */}
      <Grid item xs={12} sm={6}style={{ border: '2px solid #ccc', borderRadius: '0px',boxShadow: '0 4px 8px rgba(0,33,243, 2.5)' }}>
        <div className="card h-100" style={{ padding: '20px' }}>
          {/* Academic Information */}
          <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2 className="mt-4 mb-4 text-primary">Academic Information</h2>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4">
                      <label htmlFor="eMail">Deptartment: </label>
                      <input type="email" className="form-control" id="eMail" placeholder="Enter your dept"value="CSE" readOnly />
                    </div>
                  </div>
                  <br/>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4">
                      <label htmlFor="eMail">Level: </label>
                      <input type="email" className="form-control" id="eMail" placeholder="Enter your dept"value="4" readOnly />
                    </div>
                  </div>
                  <br/>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4">
                      <label htmlFor="eMail">Term: </label>
                      <input type="email" className="form-control" id="eMail" placeholder="Enter your dept"value="1" readOnly />
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
                      <input type="text" className="form-control" id="Street" placeholder="Enter name" value="Abidur Rahim" readOnly/>
                    </div>
                  </div>
                  <br/>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4">
                      <label htmlFor="ciTy">Phone: </label>
                      <input type="text" className="form-control" id="ciTy" placeholder="Enter phone no" value="01713654321" readOnly/>
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
                      <label htmlFor="Street">Hall: </label>
                      <input type="text" className="form-control" id="Street" placeholder="Enter Street" value="Sohrawardy" readOnly/>
                    </div>
                  </div>
                  <br/>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4">
                      <label htmlFor="ciTy">Resident: </label>
                      <input type="text" className="form-control" id="ciTy" placeholder="Enter City"value="Yes" readOnly />
                    </div>
                  </div>
                  <br/>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4">
                      <label htmlFor="ciTy">Room no: </label>
                      <input type="text" className="form-control" id="ciTy" placeholder="Enter City" value="2001" readOnly/>
                    </div>
                  </div>
                  <br/>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4">
                      <label htmlFor="ciTy">Seat no: </label>
                      <input type="text" className="form-control" id="ciTy" placeholder="Enter City" value="1" readOnly/>
                    </div>
                  </div>
                  <br/>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group mt-4">
                      <label htmlFor="ciTy">Applied for room: </label>
                      <input type="text" className="form-control" id="ciTy" placeholder="Enter City" value="No" readOnly/>
                    </div>
                  </div>
                </div>             
          {/* Buttons */}
        <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-center mr-3">
                    <button type="button" id="cancel" name="cancel" className="btn btn-secondary mr-3" style={{ marginTop: '20px',fontSize: '1.1rem',fontFamily: 'Arial, sans-serif', backgroundColor: '',boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)', width: '100px' }} onClick={() => handleDownloadClick() }>
                        Edit
                    </button>
                   
                </div>
            </div>
        </div>
        </div>
      </Grid>
    </Grid>
  </MainCard>
);

export default SamplePage;
