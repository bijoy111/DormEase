import PropTypes from 'prop-types';

// material-ui
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets

import logo from 'assets/images/student.png';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ===========================|| DASHBOARD - USER PICTURE,NAME,ID SHOWING CARD ||=========================== //

const EarningCard = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <img
                      src={logo}
                      alt=""
                      style={{
                        borderRadius: '50%',
                        border: '2px solid grey',
                        width: '150px',
                        height: '148px',
                        marginTop: '20px'
                      }}
                    />
                    <div style={{ marginLeft: '20px' }}>
                      <div style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px',marginLeft:'5px'}}>
                      {/* <h4 className="user-name">1905052</h4>
                      <h4 className="user-email">Bijoy Ahmed Saiem</h4> */}
                      <br/>
                      <br/>
                      1905052
                      <br/>
                      <br/>
                      Bijoy Ahmed Saiem
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

EarningCard.propTypes = {
  isLoading: PropTypes.bool
};

export default EarningCard;
