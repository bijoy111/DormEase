// material-ui
import { Divider, Grid } from '@mui/material';
// import bg_img from 'assets/images/bg4.mp4';
import './style.css';

// project imports
import AuthFooter from 'ui-component/cards/AuthFooter';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';

const Login = () => {
  // const theme = useTheme();
  // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="page-container" style={{ position: 'relative', zIndex: '1' }}>
      <div className="videoMain">
        {/* <video src ={bg_img}autoPlay loop muted/> */}
        <br/>
        <div className="content" style={{marginTop: '100px'}}>
    {/* <AuthWrapper1> */}
      <Grid container  justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={1} alignItems="center" justifyContent="center">
                  <Grid item xs={12}>
                    {/* <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            Hi, Welcome Back
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid> */}
                  </Grid>
                  <Grid item xs={12}>
                    <AuthLogin />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    {/* </AuthWrapper1> */}
    </div>
    </div>
    </div>
  );
};

export default Login;
