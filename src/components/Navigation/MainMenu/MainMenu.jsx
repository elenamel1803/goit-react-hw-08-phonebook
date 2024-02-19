import UserMenu from 'components/Navigation/UserMenu/UserMenu';
import { Box, Link, Wrap } from './MainMenu.styled';
import { useSelector } from 'react-redux';
import { selectAuthIsLogin } from '../../../redux/auth/authSelectors';
import AuthMenu from '../AuthMenu/AuthMenu';

const MainMenu = () => {
  const isLogin = useSelector(selectAuthIsLogin);

  return (
    <Wrap>
      <Box>
        <Link to="/">Home</Link>
        {isLogin && <Link to="/contacts">Contacts</Link>}
      </Box>
      {isLogin ? <UserMenu /> : <AuthMenu />}
    </Wrap>
  );
};

export default MainMenu;
