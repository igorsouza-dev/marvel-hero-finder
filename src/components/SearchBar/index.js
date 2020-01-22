import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Button } from './styles';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (searchQuery) {
      onSearch(searchQuery);
    }
  }
  return (
    <Container onSubmit={handleSubmit}>
      <Input placeholder="Type the name of a character" value={searchQuery} onChange={handleInputChange} />
      <Button type="submit">Search!</Button>
    </Container>
  );
}
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
