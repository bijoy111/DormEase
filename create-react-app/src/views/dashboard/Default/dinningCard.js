import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';

// project imports
import MainCard from 'ui-component/cards/MainCard';

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

// ===========================|| IGNORE ||=========================== //

const dinningCard = ({ isLoading }) => {
  return (
    <>
      {/* {isLoading ? (
        <SkeletondinningCard />
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
                      style=
                      {{
                        borderRadius: '50%',
                        border: '2px solid grey',
                        width: '150px',
                        height: '150px',
                        marginTop: '20px',
                      }}
                    />
                    <div style={{ marginLeft: '20px' }}>
                      <h3 className="user-name">1905052</h3>
                      <h4 className="user-email">Bijoy Ahmed Saiem</h4>
                    </div>
                  </Grid>    
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )} */}
    </>
  );
};

dinningCard.propTypes = {
  isLoading: PropTypes.bool
};

export default dinningCard;
