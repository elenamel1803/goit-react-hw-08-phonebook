import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/authSelectors';
import { logout } from '../../../redux/auth/authOperations';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Typography } from '@mui/material';
import { Wrap } from './UserMenu.styled';

const UserMenu = () => {
  const { name } = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <Wrap>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        Welcome, {name}
      </Typography>
      <Button onClick={onLogout} variant="contained" endIcon={<LogoutIcon />}>
        Logout
      </Button>
    </Wrap>
  );
};

export default UserMenu;
