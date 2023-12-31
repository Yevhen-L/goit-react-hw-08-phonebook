import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'Redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

const linkStyle = {
  textDecoration: 'none',
  backgroundColor: '#dafaef',
  color: 'black',
  marginRight: '40px',
  borderRadius: '5px',
  padding: '5px 10px',
  border: '1px solid white',
  transition: 'background-color 0.3s ease',
  ':hover': {
    backgroundColor: 'white',
  },
  ':focus': {
    backgroundColor: 'white',
  },
};

const activeLinkStyle = {
  textDecoration: 'none',
  color: 'black',
  backgroundColor: '#dafaef',
  padding: '5px 10px',
  marginRight: '40px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  ':hover': {
    backgroundColor: 'white',
  },
  ':focus': {
    backgroundColor: 'white',
  },
};

const ApplicationBar = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>
          {!isLoggedIn ? (
            <>
              <Button>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : linkStyle
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </Button>
              <Button>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : linkStyle
                  }
                  to="/login"
                >
                  Log in
                </NavLink>
              </Button>
            </>
          ) : (
            <UserMenu />
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default ApplicationBar;
