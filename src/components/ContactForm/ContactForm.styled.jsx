import styled from '@emotion/styled';
import { Box, TextField } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

export const StyledTextField = styled(TextField)`
  background-color: #fff;
  border-radius: 4px;
`;

export const Error = styled.p`
  text-align: center;
  color: red;
  font-size: 20px;
  margin-top: 30px;
`;
