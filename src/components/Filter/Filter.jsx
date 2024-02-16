import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts-filter/filterSlice';
import { selectFilter } from '../../redux/contacts-filter/selectors';
import { Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value.trim()));
  };

  return (
    <Input
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search by name"
    />
  );
};

export default Filter;
