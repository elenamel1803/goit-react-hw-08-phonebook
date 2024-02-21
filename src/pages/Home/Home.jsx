import Img from '../../components/Img/Img';
import { StyledContainer, StyledTypography } from './Home.styled';

const Home = () => {
  return (
    <>
      <StyledContainer>
        <StyledTypography variant="h1">
          Welcome to the Phonebook!
        </StyledTypography>
        <Img />
      </StyledContainer>
    </>
  );
};

export default Home;
