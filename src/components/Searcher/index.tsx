import React from 'react';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import CharactersGrid from 'components/CharactersGrid';
import { setCharacters } from 'store/actions';
import Character from 'types/Character';
import { InfoText, ErrorText, Content } from './styles';

const GET_CHARACTERS = gql`
  query Characters($name: String!) {
    characters(where: { nameStartsWith: $name }) {
      id
      name
      description
      thumbnail
      series {
        name
      }
    }
  }
`;

interface SearcherProps {
  input: string;
}

const Searcher: React.FC<SearcherProps> = ({ input }) => {
  const dispatch = useDispatch();
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
    const characters = data.characters.map((character: Character) => {
      const { id, name, description, thumbnail, series } = character;
      const extension = thumbnail.substring(
        thumbnail.length,
        thumbnail.length - 3
      );
      const path = thumbnail.substring(0, thumbnail.length - 4);

      return {
        id,
        name,
        description,
        thumbnail: `${path}/portrait_uncanny.${extension}`,
        series,
      };
    });
    dispatch(setCharacters(characters));

    return <CharactersGrid characters={characters} />;
  }
  return null;
};

Searcher.propTypes = {
  input: PropTypes.string.isRequired,
};

export default Searcher;
