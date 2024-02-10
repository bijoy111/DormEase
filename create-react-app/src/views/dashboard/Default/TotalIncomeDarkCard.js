import PropTypes from 'prop-types';
// material-ui
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  },
  height: '135px',
  padding: '20px'
}));

// ==============================|| DASHBOARD - LUNCH ITEM LIST CARD ||============================== //

const TotalIncomeDarkCard = ({ isLoading }) => {

  const [lunchItems, setLunchItems] = useState([]);

  useEffect(() => {
    const fetchLunchItems = async () => {
      try {
        const currentDate = new Date().toISOString().split('T')[0]; // make current date in 'YYYY-MM-DD' format
        console.log(currentDate);
        const response = await axios.get(`http://localhost:3000/dining/${currentDate}`);
        setLunchItems(response.data.lunch);
      } catch (error) {
        console.error('Error fetching lunch items:', error);
      }
    };

    fetchLunchItems();
  }, []);

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
              <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                <ListItemText
                  sx={{
                    py: 0,
                    mt: 0.45,
                    mb: 0.45
                  }}
                  primary={
                    <Typography variant="h4" sx={{ color: '#fff', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px' }}>
                      Lunch Item List
                    </Typography>
                  }
                  secondary={
                    <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 1.25, fontWeight: 600, fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px' }}>
                      {lunchItems.map((item) => item.name).join(', ')}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalIncomeDarkCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalIncomeDarkCard;
