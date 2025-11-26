import {useState} from 'react';
import {ISearchProps} from './ISearch.props';

export const useSearch = (): ISearchProps => {
  const [showFilter, setShowFilter] = useState(false);
  return {
    showFilter,
    setShowFilter,
  };
};
