import { Link, Wrap } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <Wrap>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Wrap>
  );
};

export default AuthMenu;
