import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from '../../redux/auth/authOperations';

import AppRoutes from './AppRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
