import PropTypes from 'prop-types';

// material-ui
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// project imports
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
<<<<<<< HEAD
                  primary={<Typography variant="h4">Dinner Item List</Typography>}
=======
                  primary={
                    <Typography variant="h4" sx={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px' }}>
                      Dinner Item List
                    </Typography>
                  }
>>>>>>> 8529f0c (admin basic frontend added)
                  secondary={
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.grey[500],
                        mt: 1.25,
<<<<<<< HEAD
                        fontWeight: 600
=======
                        fontWeight: 600,
                        fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px'
>>>>>>> 8529f0c (admin basic frontend added)
                      }}
                    >
                      Rice, Vegetables, Meat, Eggs, Fish
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
