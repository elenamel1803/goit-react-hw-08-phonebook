import { useSelector } from 'react-redux';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import {
  selectAuthIsLoading,
  selectAuthError,
} from '../../redux/auth/authSelectors';
import Loader from '../../components/Loader/Loader';

const Register = () => {
  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);

  return (
    <>
      <p>Register page</p>
      <RegisterForm />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default Register;
