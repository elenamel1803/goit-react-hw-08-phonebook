import styled from '@emotion/styled';
import { IconButton, Typography } from '@mui/material';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

export const StyledIconButton = styled(IconButton)`
  &:hover {
    color: ${props => props.theme.palette.primary.main};
    background-color: transparent;
  }
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  font-size: 20px;
`;
