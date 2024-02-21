import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 24px;

  &.active {
    font-weight: bold;
    color: #1976d2;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;
