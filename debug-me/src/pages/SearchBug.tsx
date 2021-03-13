import React from 'react';
import '../styles/pages/search-bug.css';

// import { Container } from './styles';

const SearchBug: React.FC = () => {
  return (
    <div id="search-bug">
      <input type="text" id="error-info" placeholder="Type the error message" />
      <button>Search</button>
    </div>
  );
}

export default SearchBug;