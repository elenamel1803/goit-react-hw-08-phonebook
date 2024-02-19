import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 24px;

  &.active {
    font-weight: bold;
  }
`;

export const Wrap = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  gap: 20px;
`;
