
import { Button, Typography } from '@mui/material';
import { IconDownload } from '@tabler/icons';

import logo from 'assets/images/notice_demo.png';

import { useEffect, useState } from 'react';

const NoticeboardPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('noticeboardData');
    if (storedData) {
      const { Title, createdAt, Text } = JSON.parse(storedData);
      //console.log('Received data:', { postId, createdAt });

      // Set the data in the component state
      setData({ Title, createdAt, Text });

      // Clear the data from localStorage after use
      localStorage.removeItem('noticeboardData');
    }
  }, []);

  if (!data) {
    // If data is not available yet, you can render a loading state or return null
    return <div>Loading...</div>;
  }

  return (
    <div style={{backgroundColor: '#f4f5ff'}}>
      <div style={{ background: '#555555', padding: '10px', borderRadius: '8px', width: '80%', height: '100px', margin: '0 auto' }}>
        <Typography variant="body2" style={{ color: 'white' }}>
          <h5>{data.createdAt}</h5>
          <h4>{data.Title}</h4>
        </Typography>
      </div>
      <div style={{ margin: '16px' }} />
      <div style={{ background: 'white', padding: '30px', borderRadius: '8px', width: '60%', margin: '0 auto', boxShadow: '0 4px 8px rgba(0, 0, 255, 2.5)' }}>
        <Button variant="contained" color="primary" style={{ marginTop: '2px', marginLeft: 'auto' }}>
          <IconDownload />
        </Button>
        <div style={{ margin: '16px' }} />
        {/* Add your image rendering here, assuming `logo` is defined */}
        <img src={logo} alt="" style={{ width: '100%', borderRadius: '8px', border: '2px solid grey' }} />
        <div style={{ margin: '16px' }} />
        <Typography variant="body2" style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
          {data.Text}
        </Typography>
      </div>
    </div>
  );
};

export default NoticeboardPage;
