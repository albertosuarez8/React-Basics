import { useState, useEffect } from 'react';
import ResultList from './ResultList';

// Import our search method
import search from '../utils/API';

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchGiphy = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
  };

// The primary use of useEffect in this context of data fetching is 
// to ensure that data is fetched at the right time in the component's lifecycle.
  useEffect(() => {
    searchGiphy('kittens');
  }, []);

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      <ResultList results={results} />
    </div>
  );
};

export default SearchResultContainer;
