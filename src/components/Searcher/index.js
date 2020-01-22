import React from 'react';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/react-hooks';

import CharactersGrid from 'components/CharactersGrid';
import { InfoText, ErrorText, Content } from './styles';

const GET_CHARACTERS = gql`
  query Characters($name: String!) {
    characters(where: { nameStartsWith: $name }) {
      id
      name
      thumbnail
    }
  }
`;

function Searcher({ input }) {
  const { loading, data, error } = useQuery(GET_CHARACTERS, {
    variables: { name: input },
  });

  if (loading) {
    return (
      <Content>
        <InfoText>Loading...</InfoText>
      </Content>
    );
  }

  if (error) {
    return (
      <Content>
        <ErrorText>{error.message}</ErrorText>
      </Content>
    );
  }

  if (data && data.characters) {
    const characters = data.characters.map((character) => {
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
    });

    return <CharactersGrid characters={characters} cardSize={200} />;
  }
  return null;
}

Searcher.propTypes = {
  input: PropTypes.string.isRequired,
};

export default Searcher;
