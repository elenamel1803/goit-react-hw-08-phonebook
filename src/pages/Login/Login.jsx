import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import { Typography } from '@mui/material';

const Login = () => {
  const isLoading = useSelector(selectAuthIsLoading);

  return (
    <>
      <Typography sx={{ textAlign: 'center' }} variant="h4">
        Login page
      </Typography>
      <LoginForm />
      {isLoading && <Loader />}
    </>
  );
};

export default Login;
