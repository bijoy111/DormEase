import { Button, Menu } from '@mui/material';
import { IconArrowBigDownFilled, IconArrowBigUpFilled } from '@tabler/icons-react';
import user_pic from 'assets/images/common_user10.png';
import newsfeed_pic from 'assets/images/ece.png';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    // revoke the data uris to avoid memory leaks
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

  // const [votes, setVotes] = useState(0);
  // const handleUpvote = () => {
  //   setVotes(votes + 1);
  // };
  // const handleDownvote = () => {
  //   setVotes(votes - 1);
  // };


  const [cardData, setCardData] = useState([]);
  const fetchCardDataFromDatabase = async () => {
    console.log('hello');
    try {
      const response = await fetch('http://localhost:3000/feed', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });
      const data = await response.json();
      console.log(data);
      setCardData(data);
      setVotes(parseInt(data[0].upvote - data[0].downvote));
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };
  useEffect(() => {
    fetchCardDataFromDatabase();
  }, []);

  const [text, setText] = useState('');
  const handleAddpost = async () => {
    try {
      const response = await axios.post('http://localhost:3000/feed/post/compose', {
        text: text,
        media: 'null'
      }, { withCredentials: true });
      console.log('Post submitted:', response.data);
      setText('');
    } catch (error) {
      console.error('Error submitting post:', error);
    }
    // window.open('/free/newsfeed/default', '_self');
    fetchCardDataFromDatabase();
  };

  const [commentText, setCommentText] = useState('');
  const handleCommentSubmit = async (postId) => {
    try {
      const response = await axios.post(`http://localhost:3000/feed/comment/${postId}`, {
        text: commentText,
        media: 'null'
      }, { withCredentials: true });
      console.log('Comment submitted:', response.data);
      setText('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
    // window.open('/free/newsfeed/default', '_self');
    fetchCardDataFromDatabase();
  };

  const handleUpvoteSubmit = async (postId) => {
    try {
      const response = await axios.post(`http://localhost:3000/feed/upvote/${postId}`, {}, { withCredentials: true });
      console.log('Upvote submitted:', response.data);
      setText('');
    } catch (error) {
      console.error('Error submitting upvote:', error);
    }
    // window.open('/free/newsfeed/default', '_self');
    fetchCardDataFromDatabase();
  };
  const handleDownvoteSubmit = async (postId) => {
    try {
      const response = await axios.post(`http://localhost:3000/feed/downvote/${postId}`, {}, { withCredentials: true });
      console.log('Downvote submitted:', response.data);
      setText('');
    } catch (error) {
      console.error('Error submitting downvote:', error);
    }
    // window.open('/free/newsfeed/default', '_self');
    fetchCardDataFromDatabase();
  };

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
                <textarea className="form-control custom-input" id="cause" value={text} placeholder="What's on your mind?" style={{ color: '#B2BEB5', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', width: '360px', height: '150px', minHeight: '80px', paddingRight: '25px' }} onChange={(e) => setText(e.target.value)}></textarea>
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
              onClick={() => handleAddpost()}
              onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }}
            >
              Add Post
            </Button>
          </Menu>
        </div>
      </section>

      {cardData.map((card, index) => (
        <React.Fragment key={index}>
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

                    <>
                      <strong>{card.name}</strong>
                      <br />
                      {/* Check if created_at property exists in the first element */}
                      {card.created_at && (
                        <small style={{ marginTop: '-6px' }}>{cardData[0].created_at}</small>
                      )}
                    </>

                  </div>
                </div>
                {/* post related Description */}
                <div style={{ backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '8px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '1.5' }}>
                  <p>
                    {card.text}
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
                      onClick={() => handleUpvoteSubmit(card.post_id)}
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
                    <span style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 5px', alignSelf: 'center' }}>{parseInt(card.upvote) - parseInt(card.downvote)}</span>
                    <button
                      onClick={() => handleDownvoteSubmit(card.post_id)}
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
                    <span className="text-muted">{card.comments.length} comments</span>
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
                    <textarea
                      className="form-control"
                      id="textAreaExample"
                      rows="4"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)} // Moved onChange event handler outside the value attribute
                    ></textarea>
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
                      onClick={() => handleCommentSubmit(card.post_id)}
                      onMouseEnter={(e) => { e.target.style.backgroundColor = '#e3f2fd'; e.target.style.color = 'black'; }} // Change to desired color
                      onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                    >
                      Submit
                    </Button>
                  </div>
                </div>

                {/* Single answer */}
                {card.comments.map((comment, index) => (
                  <div key={index}>
                    <div className="d-flex mb-3" style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <a href="">
                        <img src={user_pic} className="border rounded-circle me-2" alt="Avatar" style={{ height: '50px' }} />
                      </a>
                      <div style={{ marginLeft: '8px', padding: '10px', borderRadius: '8px' }}>
                        <div className="bg-light rounded-3 px-3 py-1" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', }}>
                          <strong>{comment.name}</strong>
                          <br />
                          <small style={{ display: 'block' }}>
                            {comment.text}
                          </small>
                        </div>
                        {/* <strong>Reply</strong> */}
                      </div>
                      {/* {comments.map((comment, index) => (
                <div key={index}>
                  <p>{comment}</p>
                </div>
              ))} */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {index < cardData.length - 1 && <div style={{ margin: '16px' }} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SamplePage;
