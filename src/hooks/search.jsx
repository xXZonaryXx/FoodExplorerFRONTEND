import { createContext, useContext, useState } from 'react';

export const SearchContext = createContext({});

function SearchProvider({ children }) {

  const [ data, setData ] = useState({ search: '' });

  function setSearch(value) {

    const search = value
      .trim()
      .replace(/[^\p{L}\d\s]/gu, "");

    setData({ search });
  }

  return (
    <SearchContext.Provider value={{
      setSearch,
      searchValue: data.search,
    }}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  return context;
}

export { SearchProvider, useSearch };