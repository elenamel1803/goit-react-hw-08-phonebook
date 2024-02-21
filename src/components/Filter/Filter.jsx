import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts-filter/filterSlice';
import { selectFilter } from '../../redux/contacts-filter/selectors';
import { StyledBox, StyledTextField } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value.trim()));
  };

  return (
    <>
      <StyledBox
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <StyledTextField
          id="outlined-search"
          label="Search by name"
          type="search"
          variant="outlined"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </StyledBox>
    </>
  );
};

export default Filter;
