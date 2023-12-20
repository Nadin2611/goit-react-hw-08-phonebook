import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';
import { selectFilter } from '../../redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterHandleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Find contact by name
        <FilterInput
          type="text"
          value={filter}
          onChange={filterHandleChange}
        ></FilterInput>
      </FilterLabel>
    </FilterContainer>
  );
};
