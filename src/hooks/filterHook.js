import { useDispatch, useSelector } from 'react-redux';
import { filterAction, onFilterChange } from '../Redux/filterSlice';

export const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(onFilterChange);
  const onChangeFilter = event => dispatch(filterAction.changeFilter(event));

  return { filter, changeFilter: onChangeFilter };
};
