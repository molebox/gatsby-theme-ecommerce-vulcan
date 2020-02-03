import React from "react";

export const useSearchBar = cats => {
  console.log({ cats });
  const emptyQuery = "";
  const [searchQuery, setSearchQuery] = React.useState({
    filteredData: [],
    query: emptyQuery
  });

  const handleSearchQuery = e => {
    const query = e.target.value;

    const category = cats || [];

    const filteredData = category.filter(cat => {
      return cat.toLowerCase().includes(query.toLowerCase());
    });

    setSearchQuery({ filteredData, query });
  };

  const { filteredData, query } = searchQuery;
  const hasSearchResult = filteredData && query !== emptyQuery;
  const category = hasSearchResult ? filteredData : cats;

  return { category, handleSearchQuery };
};
