import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import {
  selectAuthIsLoading,
  selectAuthError,
} from '../../redux/auth/authSelectors';

const Login = () => {
  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);

  return (
    <>
      <p>Login page</p>
      <LoginForm />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default Login;
