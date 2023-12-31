import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getUserEmail } from 'Redux/auth/authSelectors';
import { logout } from 'Redux/auth/authOperations';

export const UserMenu = () => {
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  return (
    <>
      <Typography sx={{ mr: 2 }}>{userEmail ? userEmail : null}</Typography>
      <Button onClick={() => dispatch(logout())} color="inherit">
        Logout
      </Button>
    </>
  );
};
