import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MainMenu from 'components/Navigation/MainMenu/MainMenu';
import { Header, Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <MainMenu />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
