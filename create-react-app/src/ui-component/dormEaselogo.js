// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //
import logo from 'assets/images/logo.svg';
const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <>
      <img src={logo} alt="Berry" width="40" />
      <h1>DormEase</h1>

      <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M253.49 887.14h-75.16c-63.04 0-114.32-48.3-114.32-107.65V171.6c0-59.35 51.28-107.65 114.32-107.65h594.5c63.04 0 114.35 48.3 114.35 107.65v132.44c0 18.96-15.34 34.3-34.3 34.3s-34.3-15.34-34.3-34.3V171.6c0-21.54-20.53-39.05-45.75-39.05h-594.5c-25.22 0-45.72 17.52-45.72 39.05v607.89c0 21.5 20.5 39.05 45.72 39.05h75.16c18.96 0 34.3 15.34 34.3 34.3s-15.34 34.3-34.3 34.3z"
          fill={theme.palette.grey[900]}
        />
        <path
          d="M296.21 623.04c-15.44-5.19-25.9-19.64-25.9-35.95s10.45-30.79 25.9-35.91L602.3 449.15a39.962 39.962 0 0 1 25.3 0l306.09 102.03c15.44 5.13 25.9 19.61 25.9 35.91s-10.45 30.76-25.9 35.95L627.62 725.18a40.055 40.055 0 0 1-25.33 0L296.21 623.04z m137.44-34.06l174.98 58.31c4.1 1.37 8.54 1.37 12.65 0l174.98-58.31c1.82-0.61 1.82-3.19 0-3.79l-174.98-58.34a19.981 19.981 0 0 0-12.65 0l-174.98 58.34c-1.82 0.61-1.82 3.19 0 3.79z"
          fill={theme.palette.grey[900]}
        />
        <path
          d="M614.95 959.56c-77.65 0-155.94-22.83-232.66-67.9-11.58-6.86-18.71-19.24-18.71-32.69V625.68c0-20.7 16.31-38.11 37.01-38.57 21.3-0.48 38.75 16.68 38.75 37.87v205.77c0 3.76 2.12 7.19 5.46 8.91 113.82 58.63 226.45 58.63 340.27 0 3.34-1.72 5.46-5.15 5.46-8.91V625.68c0-20.7 16.31-38.11 37.01-38.57 21.3-0.48 38.75 16.68 38.75 37.87v234c0 13.45-7.12 25.83-18.71 32.69-76.72 45.05-154.97 67.89-232.63 67.89zM509.89 338.33H304.1c-18.96 0-34.3-15.34-34.3-34.3 0-18.96 15.34-34.3 34.3-34.3h205.79c18.96 0 34.3 15.34 34.3 34.3 0 18.96-15.34 34.3-34.3 34.3z"
          fill={theme.palette.grey[900]}
        />
      </svg>
    </>
  );
};

export default Logo;
