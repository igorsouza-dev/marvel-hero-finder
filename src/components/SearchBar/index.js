import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Button } from './styles';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }
  return (
    <Container>
      <Input value={searchQuery} onChange={handleInputChange} />
      <Button onClick={() => onSearch(searchQuery)}>Search!</Button>
    </Container>
  );
}
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
