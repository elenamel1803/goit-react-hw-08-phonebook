import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/authSelectors';
import { logout } from '../../../redux/auth/authOperations';
import { Wrap } from './UserMenu.styled';

const UserMenu = () => {
  const { name } = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <Wrap>
      <p>{name}</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </Wrap>
  );
};

export default UserMenu;
