import UserMenu from 'components/UserMenu/UserMenu';
import { Link, List } from './MainMenu.styled';

const MainMenu = () => {
  return (
    <List>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
      <li>
        <UserMenu />
      </li>
    </List>
  );
};

export default MainMenu;
