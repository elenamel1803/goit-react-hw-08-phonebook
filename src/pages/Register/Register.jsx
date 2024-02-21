import { useSelector } from 'react-redux';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Loader from '../../components/Loader/Loader';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import { Typography } from '@mui/material';

const Register = () => {
  const isLoading = useSelector(selectAuthIsLoading);

  return (
    <>
      <Typography sx={{ textAlign: 'center' }} variant="h4">
        Register page
      </Typography>
      <RegisterForm />
      {isLoading && <Loader />}
    </>
  );
};

export default Register;
