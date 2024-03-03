import { Button, Typography } from '@mui/material';
import { IconDownload } from '@tabler/icons';
import logo from 'assets/images/notice_demo.png';
import jsPDF from 'jspdf';

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

  const handleDownloadClick = () => {
    const pdf = new jsPDF();

    // Add title to the top and center
    let textWidth = pdf.getStringUnitWidth(data.Title) * 16;
    let textX = 20 + (pdf.internal.pageSize.getWidth() - textWidth) / 2;
    let textY = 10; // Adjust the vertical position as needed

    // Add text to PDF
    pdf.text(data.Title, textX, textY);
    textX = 20;
    textY += 10;
    pdf.text(data.createdAt, textX, textY);

    // Calculate center position for image
    const imageWidth = 90; // Width of the image in the PDF
    const imageX = (pdf.internal.pageSize.getWidth() - imageWidth) / 2;
    const imageY = 30;

    // Add image to PDF
    const img = new Image();
    img.src = logo;
    pdf.addImage(img, 'PNG', imageX, imageY, imageWidth, 90);

    // Calculate center position for text
    textY = imageY + 100; // Adjust the vertical position as needed

    // Add text to PDF
    const fontSize = 12;
    const lineHeight = fontSize * 1.2; // Line height based on font size
    const maxWidth = pdf.internal.pageSize.getWidth() - 40; // Maximum width available for the text

    // Split the text into lines based on the available width
    const textLines = pdf.splitTextToSize(data.Text, maxWidth, { fontSize: fontSize });

    // Calculate the height of the text block
    const textHeight = textLines.length * lineHeight;

    // Check if the text block exceeds the available height
    if (textY + textHeight > pdf.internal.pageSize.getHeight() - 20) {
      // Adjust vertical position to start a new page
      textY = 20;
      pdf.addPage();
    }

    // Add text to PDF
    pdf.text(textLines, 20, textY, { maxWidth: maxWidth });

    // Save PDF
    pdf.save(`${data.Title}.pdf`);
  };

  if (!data) {
    // If data is not available yet, we can render a loading state or return null
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: '#f4f5ff', paddingTop: '20px', paddingBottom: '20px' }}>
      <div style={{ background: '#349cff', padding: '10px', borderRadius: '8px', width: '80%', height: '130px', margin: '0 auto', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="body2" style={{ color: 'white', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', marginLeft: '20px' }} >
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
          boxShadow: '0 4px 8px rgba(0, 0, 255, 2.5)',
        }}
      >
        <Button
          variant="outlined"
          type="button"
          id="cancel"
          name="cancel"
          className="btn btn-secondary mr-3"
          style={{
            marginTop: '2px',
            fontSize: '1.1rem',
            fontFamily: 'Arial, sans-serif',
            borderRadius: '10px',
            height: '40px',
            width: '80px',
            boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            color: 'white',
            backgroundColor: '#673AB7',
          }}
          onClick={handleDownloadClick} // Call the handleDownloadClick function on click
          onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
        >
          <IconDownload />
        </Button>
        <div style={{ margin: '16px' }} />
        <img src={logo} alt="" style={{ width: '100%', borderRadius: '8px', border: '2px solid grey' }} />
        <div style={{ margin: '16px', fontFamily: 'Helvetica, Arial, sans-serif' }} />
        <Typography variant="body2" style={{ color: 'black', fontFamily: 'Arial, sans-serif', fontSize: '20px' }}>
          {data.Text}
        </Typography>
      </div>
    </div>
  );
};

export default NoticeboardPage;
