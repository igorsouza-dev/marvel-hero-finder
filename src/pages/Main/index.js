import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import CharactersGrid from 'components/CharactersGrid';
import SearchBar from 'components/SearchBar';
// prettier-ignore
import {
  Container,
  Header,
  SubTitle,
  LoadingText,
} from './styles';

const GET_CHARACTERS = gql`
  query Characters($name: String!){
    characters(where: { nameStartsWith: $name }) {
      id, name, thumbnail
    }
  }
`;

export default function Main() {
  const [getCharacters, { loading, data }] = useLazyQuery(GET_CHARACTERS);

  function search(input) {
    getCharacters({
      variables: { name: input },
    });
  }
  function renderResults() {
    if (loading) return <LoadingText>Loading...</LoadingText>;

    if (data && data.characters) {
      const characters = data.characters.map((character) => {
        const { id, name, thumbnail } = character;
        const extension = thumbnail.substring(
          thumbnail.length,
          thumbnail.length - 3,
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
      });

      return <CharactersGrid characters={characters} cardSize={200} />;
    }
    return null;
  }

  return (
    <Container>
      <Header>
        <img src="/marvel.svg" alt="marvel" />
        <SubTitle>Hero Finder</SubTitle>
        <SearchBar onSearch={search} />
      </Header>
      <div>
        {renderResults()}
      </div>
    </Container>
  );
}
