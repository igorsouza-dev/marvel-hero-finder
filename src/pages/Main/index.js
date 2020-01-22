import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import apollo from 'services/apollo';

import CharactersGrid from 'components/CharactersGrid';
import { Container, Header, SubTitle, SearchBar } from './styles';

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  async function handleSearch() {
    const response = await apollo.query({
      query: gql`
        {
          characters(where: { nameStartsWith: "${searchQuery}"}){
            id,name, thumbnail
          }
        }
      `,
    });
    if (response.data) {
      if (response.data.characters) {
        setCharacters(
          response.data.characters.map((character) => {
            const { id, name, thumbnail } = character;
            const extension = thumbnail.substring(
              thumbnail.length,
              thumbnail.length - 3
            );
            const path = thumbnail.substring(0, thumbnail.length - 4);

            return {
              id,
              name,
              thumbnail: {
                path,
                extension,
              },
            };
          })
        );
      }
    }
  }

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <Container>
      <Header>
        <img src="/marvel.svg" alt="marvel" />
        <SubTitle>Hero Finder</SubTitle>
        <SearchBar onChange={handleInputChange} value={searchQuery} />
        <button type="button" onClick={handleSearch}>
          Search!
        </button>
      </Header>

      <CharactersGrid characters={characters} cardSize={200} />
    </Container>
  );
}
