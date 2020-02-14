import React from "react";

export const useSearchBar = info => {
  const emptyQuery = "";
  const [searchQuery, setSearchQuery] = React.useState({
    filteredData: [],
    query: emptyQuery
  });

  const handleSearchQuery = e => {
    const query = e.target.value;

    const categories = info || [];

    const filteredData = categories.filter(cat => {
      return cat.title.toLowerCase().includes(query.toLowerCase());
    });

    setSearchQuery({ filteredData, query });
  };

  const { filteredData, query } = searchQuery;
  const hasSearchResult = filteredData && query !== emptyQuery;
  const categories = hasSearchResult ? filteredData : info;
  console.log("result: ", categories);

  return { categories, handleSearchQuery };
};
