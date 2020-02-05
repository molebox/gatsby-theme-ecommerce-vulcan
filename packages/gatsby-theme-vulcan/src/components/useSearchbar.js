import React from "react";

export const useSearchBar = (info) => {

  const removeDuplicates = (array, key) => {
    let lookup = new Set();
    return array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
  }
  const categoryInfo = removeDuplicates(info.map(cat => cat.categories), 'id');
  console.log({categoryInfo})

  const emptyQuery = "";
  const [searchQuery, setSearchQuery] = React.useState({
    filteredData: [],
    query: emptyQuery
  });

  const handleSearchQuery = e => {
    const query = e.target.value;

    const categories = categoryInfo || [];

    const filteredData = categories.filter(cat => {
      if (cat.title) {
        console.log(cat.title)
        return cat.title.toLowerCase().includes(query.toLowerCase());
      }
    });

    setSearchQuery({ filteredData, query });
  };

  const { filteredData, query } = searchQuery;
  const hasSearchResult = filteredData && query !== emptyQuery;
  const categories = hasSearchResult ? filteredData : info;
  console.log('result: ', categories)

  return { categories, handleSearchQuery };
};
