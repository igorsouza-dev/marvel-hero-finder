import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container, Input, Button } from './styles';

interface SearchBarProps {
  onSearch(searchQuery: string): void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }
  function handleSubmit(e: React.ChangeEvent<HTMLElement>) {
    e.preventDefault();
    if (searchQuery) {
      onSearch(searchQuery);
    }
  }
  return (
    <Container onSubmit={handleSubmit}>
      <Input
        placeholder="Type the name of a character"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <Button type="submit">
        <FaSearch size={20} />
      </Button>
    </Container>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
