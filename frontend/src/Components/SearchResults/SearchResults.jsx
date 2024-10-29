import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
    </div>
  );
};

export default SearchResults;
