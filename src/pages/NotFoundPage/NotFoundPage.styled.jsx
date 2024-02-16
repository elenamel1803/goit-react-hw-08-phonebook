import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const LinkToHomePage = styled(Link)`
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  padding: 10px;
  margin: auto;
  margin-bottom: 24px;
  background-color: #e7e4e4;
  width: 150px;

  &:hover {
    font-weight: bold;
    background-color: #5a5757;
    color: #fff;
  }
`;
