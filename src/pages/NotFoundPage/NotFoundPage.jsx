import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { StyledContainer, StyledTypography } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <StyledContainer>
      <StyledTypography variant="h1">Cannot found this page</StyledTypography>
      <Button variant="outlined" size="large" startIcon={<ArrowBackIcon />}>
        <Link to="/">To home page</Link>
      </Button>
    </StyledContainer>
  );
};

export default NotFoundPage;
