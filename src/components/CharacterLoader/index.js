import React from 'react';
import { useDispatch } from 'react-redux';

import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import CharacterDetails from 'components/CharacterDetails';
import { setCharacter } from 'store/actions';
import {
  Content,
  InfoText,
  ErrorText,
} from './styles';

const GET_CHARACTERS = gql`
  query Characters($id: Int!) {
    characters(where: { id: $id }) {
      id
      name
      description
      thumbnail
      series {
        name
        role
        resourceURI
      }
    }
  }
`;

function CharacterLoader({ characterId }) {
  const dispatch = useDispatch();
  const {
    loading, data, error,
  } = useQuery(GET_CHARACTERS, {
    variables: { id: parseInt(characterId, 10) },
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
    const character = data.characters[0];
    const { thumbnail } = character;

    if (typeof thumbnail === 'string') {
      const extension = thumbnail.substring(
        thumbnail.length,
        thumbnail.length - 3,
      );
      const path = thumbnail.substring(0, thumbnail.length - 4);
      character.thumbnail = {
        path,
        extension,
      };
    }
    dispatch(setCharacter(character));
    return (
      <CharacterDetails character={character} />
    );
  }
  return null;
}

CharacterLoader.propTypes = {
  characterId: PropTypes.string.isRequired,
};

export default CharacterLoader;
