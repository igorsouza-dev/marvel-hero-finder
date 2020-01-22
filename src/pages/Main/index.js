import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import apollo from 'services/apollo';

import CharactersGrid from 'components/CharactersGrid';
import SearchBar from 'components/SearchBar';
// prettier-ignore
import {
  Container,
  Header,
  SubTitle,
} from './styles';

export default function Main() {
  const [characters, setCharacters] = useState([]);

  async function handleSearch(searchQuery) {
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

  return (
    <Container>
      <Header>
        <img src="/marvel.svg" alt="marvel" />
        <SubTitle>Hero Finder</SubTitle>
        <SearchBar onSearch={handleSearch} />
      </Header>

      <CharactersGrid characters={characters} cardSize={200} />
    </Container>
  );
}
