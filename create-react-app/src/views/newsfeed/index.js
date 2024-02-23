import { Button, Menu } from '@mui/material';
import { IconArrowBigDownFilled, IconArrowBigUpFilled } from '@tabler/icons-react';
import newsfeed_pic from 'assets/images/ece.png';
import user_pic from 'assets/images/student.png';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './style.css';
const SamplePage = () => {

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files])

  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleBoxClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const [votes, setVotes] = useState(0);
  const commentsCount = 8;
  const handleUpvote = () => {
    setVotes(votes + 1);
  };
  const handleDownvote = () => {
    setVotes(votes - 1);
  };


  // State for storing card data
  const [cardData, setCardData] = useState([]);
  // Function to fetch card data from the database
  const fetchCardDataFromDatabase = async () => {
    console.log('hello');
    try {
      // Fetch data from the database API
      const response = await fetch('http://localhost:3000/feed', {
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



  return (

    <div className={`${menuOpen ? 'blur-background' : ''}`}>
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="d-flex mb-3" style={{ backgroundColor: 'white', padding: '10px', borderRadius: '8px', width: '1000px' }}>
          {/* user image */}
          <a href="">
            <img src={user_pic} className="border rounded-circle me-2" alt="Avatar" style={{ height: '50px', marginRight: '20px', marginTop: '15px' }} />
          </a>
          <Button
            className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
            style={{
              marginTop: '0px',
              borderRadius: '20px',
              border: '12px',
              backgroundColor: '#673AB7',
              paddingLeft: '20px',
              color: 'white',
              cursor: 'pointer',
              width: '1000px',
              fontSize: '20px',
              fontWeight: '1.5rem',
            }}
            onClick={handleBoxClick}
            onMouseEnter={(e) => { e.target.style.backgroundColor = '#e3f2fd'; e.target.style.color = 'black'; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }}
          >
            <p>{`What's on your mind?`}</p>
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
                height: '430px',
                width: '420px',
                backgroundColor: '#EDE7F6',
                marginLeft: '0x',
                marginTop: '20px',
                transition: 'transform 0.5s ease-in-out', // Add transition for smooth effect
                transformStyle: 'preserve-3d', // Preserve 3D transformations
                perspective: '1000px', // Add perspective for 3D effect
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
              <div className="form-group mt-4" style={{ width: 'auto', display: 'inline-block', paddingLeft: '25px', paddingTop: '30px', paddingRight: '25px', }}>
                <p1 style={{ textAlign: 'center', fontSize: '20px' }}>Create Post</p1>
                <textarea className="form-control custom-input" id="cause" placeholder="What's on your mind?" style={{ color: '#B2BEB5', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', width: '360px', height: '150px', minHeight: '80px', paddingRight: '25px' }}></textarea>
              </div>
            </div>

            <div style={{ border: '2px dashed #ccc', borderRadius: '8px', padding: '20px', textAlign: 'center', color: '#ccc', fontSize: '16px', marginTop: '15px', width: '360px', marginLeft: '25px', cursor: 'pointer' }}>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Add photos</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {files.map(file => (
                  <div style={{ maxWidth: '100px', maxHeight: '100px', overflow: 'hidden', margin: '5px' }} key={file.name}>
                    <img src={file.preview} alt={file.name} style={{ width: '100%', height: '50px' }} />
                  </div>
                ))}
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
                width: '150px',
                boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease-in-out',
                color: 'white',
                backgroundColor: '#673AB7',
              }}
              onClick={() => handleDownloadClick()}
              onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }}
            >
              Add Post
            </Button>
          </Menu>
        </div>
      </section>
      <section
        className="newsfeed-section"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          borderRadius: '18px'
        }}
      >
        <div className="card" style={{ maxWidth: '62rem', backgroundColor: '#f4f5ff', marginTop: '15px' }}>
          <div className="card-body">
            {/* Data */}
            <div className="d-flex mb-3" style={{ backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '8px' }}>
              {/* user image */}
              <a href="">
                <img src={user_pic} className="border rounded-circle me-2" alt="Avatar" style={{ height: '50px' }} />
              </a>
              {/* user name */}
              <div style={{ paddingLeft: '12px', marginTop: '9px', fontSize: '20px' }}>
                {/* Check if cardData exists and has at least one element */}
                {cardData && cardData.length > 0 && (
                  <>
                    <strong>{cardData[0].name}</strong>
                    <br />
                    {/* Check if created_at property exists in the first element */}
                    {cardData[0].created_at && (
                      <small style={{ marginTop: '-6px' }}>{cardData[0].created_at}</small>
                    )}
                  </>
                )}
              </div>
            </div>
            {/* post related Description */}
            <div style={{ backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '8px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '1.5' }}>
              <p>
                {/* The Bangladesh University of Engineering and Technology (BUET) is one of the most prestigious institutions for higher
                education in Bangladesh, and also it particularly in the field of engineering and architecture. */}
                {cardData && cardData.length > 0 && cardData[0].text}
              </p>
            </div>
            <br />
            {/* post related picture */}
            <div className="card-body" style={{ backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '8px' }}>
              <div
                className="bg-image hover-overlay ripple rounded-0"
                data-mdb-ripple-color="light"
                style={{ padding: '10px', borderRadius: '8px', width: '50%', margin: '0 auto' }}
              >
                <img src={newsfeed_pic} className="w-100" alt="Media" style={{ borderRadius: '20px', width: '50%', height: '50%' }} />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                </a>
              </div>
            </div>

            <br />
            {/* upvote and downvote of a post */}
            <div className="d-flex align-items-center" style={{ backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  onClick={handleUpvote}
                  style={{
                    marginRight: '8px',
                    cursor: 'pointer',
                    backgroundColor: '#673AB7',
                    boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = '#e3f2fd'; e.target.style.color = 'black'; }} // Change to desired color
                  onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                >
                  <IconArrowBigUpFilled sx={{ fontSize: 20 }} />
                </button>
                <span style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 5px', alignSelf: 'center' }}>{votes}</span>
                <button
                  onClick={handleDownvote}
                  style={{
                    marginLeft: '8px',
                    cursor: 'pointer',
                    backgroundColor: '#673AB7',
                    boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '650px',

                  }}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = '#e3f2fd'; e.target.style.color = 'black'; }} // Change to desired color
                  onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                >
                  <IconArrowBigDownFilled sx={{ fontSize: 20 }} />
                </button>
              </div>


              <span style={{ marginRight: '2px', marginTop: '9px', fontSize: '20px' }}>
                {/* Placeholder comment icon, replace it with your actual comment icon */}
                <span role="img" aria-label="comment icon">💬</span>
              </span>
              {/* # of comments */}
              <div className="d-flex align-items-center" style={{ marginTop: '9px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px', }}>
                <span className="text-muted">{commentsCount} comments</span>
              </div>
            </div>

          </div>

          {/* write a comment */}
          <div className="card-body">
            <div className="d-flex mb-3" style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px' }}>
              <a href="">
                <img src={user_pic} className="border rounded-circle me-2" alt="Avatar" style={{ height: '50px' }} />
              </a>
              <div className="form-outline w-100" style={{ marginLeft: '8px' }}>
                <textarea className="form-control" id="textAreaExample" rows="4"></textarea>
                <label className="form-label" htmlFor="textAreaExample" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', }}>
                  Write a comment
                </label>
                <Button variant="outlined" style={{
                  marginTop: '5px',
                  fontSize: '1rem',
                  fontFamily: 'Arial, sans-serif',
                  borderRadius: '15px',
                  height: '40px',
                  width: '80px',
                  boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                  cursor: 'pointer',
                  backgroundColor: '#673AB7',
                  color: 'white',
                }}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = '#e3f2fd'; e.target.style.color = 'black'; }} // Change to desired color
                  onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                >
                  Submit
                </Button>
              </div>
            </div>

            {/* Single answer */}
            <div className="d-flex mb-3" style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <a href="">
                <img src={user_pic} className="border rounded-circle me-2" alt="Avatar" style={{ height: '50px' }} />
              </a>
              <div style={{ marginLeft: '8px', padding: '10px', borderRadius: '8px' }}>
                <div className="bg-light rounded-3 px-3 py-1" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', }}>
                  <strong>Bijoy Ahmed Saiem</strong>
                  <br />
                  <small style={{ display: 'block' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, aspernatur!Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Natus, aspernatur!
                  </small>
                </div>
                <strong>Reply</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SamplePage;
