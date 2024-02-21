import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './AppRoutes';
import { current } from '../../redux/auth/authOperations';
import { Global } from '@emotion/react';
import { globalStyles } from 'globalStyles/globalStyles';
import { Gradient } from './App.styled';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
      <Global styles={globalStyles} />
      <Gradient />
    </>
  );
}

export default App;
