import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import { MENU_OPEN } from 'store/actions';
//import Logo from 'ui-component/Logo';
import Logo from 'ui-component/dormEaselogo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={''}>
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
