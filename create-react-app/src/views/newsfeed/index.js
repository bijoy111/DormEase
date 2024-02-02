import { IconArrowBigDownFilled, IconArrowBigUpFilled } from '@tabler/icons-react';
// import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { useTheme } from '@mui/material/styles';
import newsfeed_pic from 'assets/images/ece.png';
import user_pic from 'assets/images/student.png';
import { useState } from 'react';
import './style.css'; // import the css file
const SamplePage = () => {
  const theme = useTheme();
  const [votes, setVotes] = useState(0);
  const commentsCount = 8;

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <section
      className="newsfeed-section"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f5ff',
        borderRadius: '18px'
      }}
    >
      <div className="card" style={{ maxWidth: '62rem' }}>
        <div className="card-body">
          {/* Data */}
          <div className="d-flex mb-3">
            {/* user image */}
            <a href="">
              <img src={user_pic} className="border rounded-circle me-2" alt="Avatar" style={{ height: '40px' }} />
            </a>
            {/* user name */}
            <div style={{ paddingLeft: '8px' }}>
              <strong>Bijoy Ahmed Saiem</strong>
              <br />
              {/* post time */}
              <small style={{ marginTop: '-6px' }}>10h</small>
            </div>
          </div>
          {/* post related Description */}
          <div>
            <p>
              The Bangladesh University of Engineering and Technology (BUET) is one of the most prestigious institutions for higher
              education in Bangladesh, and also it particularly in the field of engineering and architecture.
            </p>
          </div>
        </div>

        {/* post related picture */}
        <div
          className="bg-image hover-overlay ripple rounded-0"
          data-mdb-ripple-color="light"
          style={{ padding: '10px', borderRadius: '8px', width: '80%', margin: '0 auto' }}
        >
          <img src={newsfeed_pic} className="w-100" alt="Media" style={{ borderRadius: '20px' }} />
          <a href="#!">
            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
          </a>
        </div>
        <br />
        {/* upvote and downvote of a post */}
        <div className="d-flex align-items-center">
          <button onClick={handleUpvote} style={{ marginRight: '8px' }}>
            <IconArrowBigUpFilled sx={{ fontSize: 50, color: theme.palette.primary[200] }} />
          </button>
          <span>{votes}</span>
          <button onClick={handleDownvote} style={{ marginLeft: '8px', marginRight: '790px' }}>
            <IconArrowBigDownFilled sx={{ fontSize: 50, color: theme.palette.primary[200] }} />
          </button>

          {/* # of comments */}
          <div className="d-flex align-items-center">
            <span className="text-muted">{commentsCount} comments</span>
          </div>
        </div>

        <br />
        {/* write a comment */}
        <div className="card-body">
          <div className="d-flex mb-3">
            <a href="">
              <img src={user_pic} className="border rounded-circle me-2" alt="Avatar" style={{ height: '40px' }} />
            </a>
            <div className="form-outline w-100" style={{ marginLeft: '8px' }}>
              <textarea className="form-control" id="textAreaExample" rows="2"></textarea>
              <label className="form-label" htmlFor="textAreaExample">
                Write a comment
              </label>
            </div>
          </div>

          {/* Single answer */}
          <div className="d-flex mb-3">
            <a href="">
              <img src={user_pic} className="border rounded-circle me-2" alt="Avatar" style={{ height: '40px' }} />
            </a>
            <div style={{ marginLeft: '8px', backgroundColor: '#d3d3d3', padding: '10px', borderRadius: '8px' }}>
              <div className="bg-light rounded-3 px-3 py-1">
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
  );
};

export default SamplePage;
