import PropTypes from 'prop-types';

// material-ui
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
// project imports
import axios from 'axios';
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  },
  height: '135px',
  padding: '20px'
}));

// ==============================|| DASHBOARD - DINNER ITEM LIST CARD ||============================== //

const TotalIncomeLightCard = ({ isLoading }) => {

  const [dinnerItems, setDinnerItems] = useState([]);

  useEffect(() => {
    const fetchDinnerItems = async () => {
      try {
        const currentDate = new Date().toISOString().split('T')[0]; // make current date in 'YYYY-MM-DD' format
        console.log(currentDate);
        const response = await axios.get(`http://localhost:3000/dining/${currentDate}`);
        setDinnerItems(response.data.dinner);
      } catch (error) {
        console.error('Error fetching lunch items:', error);
      }
    };

    fetchDinnerItems();
  }, []);




  const theme = useTheme();

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
                    <Typography variant="h4" sx={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px' }}>
                      Dinner Item List
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.grey[500],
                        mt: 1.25,
                        fontWeight: 600,
                        fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px'
                      }}
                    >
                      {dinnerItems.map((item) => item.name).join(', ')}
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

TotalIncomeLightCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalIncomeLightCard;
