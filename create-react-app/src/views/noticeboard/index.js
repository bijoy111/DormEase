import { Button, Typography } from '@mui/material';
import { IconDownload } from '@tabler/icons';
<<<<<<< HEAD

import logo from 'assets/images/notice_demo.png';
=======
import logo from 'assets/images/notice_demo.png';
import jsPDF from 'jspdf';
>>>>>>> 8529f0c (admin basic frontend added)

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

<<<<<<< HEAD
=======
    const handleDownloadClick = () => {
    const pdf = new jsPDF();

    // Add title to the top and center
    let textWidth = pdf.getStringUnitWidth(data.Title) * 16;
    let textX = 20+(pdf.internal.pageSize.getWidth() - textWidth) / 2;
    let textY = 10; // Adjust the vertical position as needed

    // Add text to PDF
    pdf.text(data.Title, textX, textY);
    textX-=20;
    textY+=10;
    pdf.text(data.createdAt, textX, textY);
    // pdf.text(data.createdAt, pdf.internal.pageSize.getWidth() / 2, 30, null, null, 'center');

    // Calculate center position for image
    const imageWidth = 90; // Width of the image in the PDF
    const imageX = (pdf.internal.pageSize.getWidth() - imageWidth) / 2;
    const imageY = 30;

    // Add image to PDF
    const img = new Image();
    img.src = logo;
    pdf.addImage(img, 'PNG', imageX, imageY, imageWidth, 90);

    // Calculate center position for text
    textWidth = pdf.getStringUnitWidth(data.Text) * 16; // Width of the text in the PDF (assuming font size 16)
    textX = (pdf.internal.pageSize.getWidth() - textWidth) / 2;
    textY = imageY + 100; // Adjust the vertical position as needed

    // Add text to PDF
    pdf.text(data.Text, textX, textY);

    // Save PDF
    pdf.save(`${data.Title}.pdf`);
  };

>>>>>>> 8529f0c (admin basic frontend added)
  if (!data) {
    // If data is not available yet, you can render a loading state or return null
    return <div>Loading...</div>;
  }

  return (
<<<<<<< HEAD
    <div style={{ backgroundColor: '#f4f5ff' }}>
      <div style={{ background: '#555555', padding: '10px', borderRadius: '8px', width: '80%', height: '100px', margin: '0 auto' }}>
        <Typography variant="body2" style={{ color: 'white' }}>
=======
    <div style={{ backgroundColor: '#f4f5ff', paddingTop: '20px', paddingBottom:'20px' }}>
      <div style={{ background: '#349cff', padding: '10px', borderRadius: '8px', width: '80%', height: '130px', margin: '0 auto',boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="body2" style={{ color: 'white',fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px' }} >
>>>>>>> 8529f0c (admin basic frontend added)
          <h5>{data.createdAt}</h5>
          <h4>{data.Title}</h4>
        </Typography>
      </div>
      <div style={{ margin: '16px' }} />
      <div
        style={{
          background: 'white',
          padding: '30px',
          borderRadius: '8px',
          width: '60%',
          margin: '0 auto',
<<<<<<< HEAD
          boxShadow: '0 4px 8px rgba(0, 0, 255, 2.5)'
        }}
      >
        <Button variant="contained" color="primary" style={{ marginTop: '2px', marginLeft: 'auto' }}>
=======
          boxShadow: '0 4px 8px rgba(0, 0, 255, 2.5)',
        }}
      >
        {/* <Button variant="contained" color="primary" style={{ marginTop: '2px', marginLeft: 'auto' }}>
          <IconDownload />
        </Button> */}
        <Button 
          variant="outlined"
          type="button"
          id="cancel"
          name="cancel"
          className="btn btn-secondary mr-3"
          style={{
            marginTop: '2px',
            // marginLeft: '15px',
            fontSize: '1.1rem',
            fontFamily: 'Arial, sans-serif',
            borderRadius: '10px', // Adjust the border-radius for rounded corners
            height: '40px', // Adjust the height as needed
            width: '80px',
            boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            color:'white',
            backgroundColor: '#673AB7',
          }}
          // onClick={() => handleDownloadClick()}
          onClick={handleDownloadClick} // Call the handleDownloadClick function on click
          onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white';}} // Change back to default color
        >
>>>>>>> 8529f0c (admin basic frontend added)
          <IconDownload />
        </Button>
        <div style={{ margin: '16px' }} />
        {/* Add your image rendering here, assuming `logo` is defined */}
        <img src={logo} alt="" style={{ width: '100%', borderRadius: '8px', border: '2px solid grey' }} />
<<<<<<< HEAD
        <div style={{ margin: '16px' }} />
        <Typography variant="body2" style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
=======
        <div style={{ margin: '16px',fontFamily: 'Helvetica, Arial, sans-serif' }} />
        <Typography variant="body2" style={{ color: 'black', fontFamily: 'Arial, sans-serif',fontSize: '20px' }}>
>>>>>>> 8529f0c (admin basic frontend added)
          {data.Text}
        </Typography>
      </div>
    </div>
  );
};

export default NoticeboardPage;
