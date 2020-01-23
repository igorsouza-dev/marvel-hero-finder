import React from 'react';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import {
  Container,
  Section,
  Picture,
  Text,
  Label,
  DescriptionContainer,
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
  const { loading, data, error } = useQuery(GET_CHARACTERS, {
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

    return (
      <Container>
        <Section>
          {thumbnail && (
            <Picture
              src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
              alt={character.name}
            />
          )}

          <DescriptionContainer>
            <Label>Name</Label>
            <Text>{character.name}</Text>
            <Label>Description</Label>
            <Text>{character.description || 'No description provided.'}</Text>
            <Label>Series</Label>
            {character.series.length ? (
              character.series.map((serie) => (
                <Text key={serie.name}>{serie.name}</Text>
              ))
            ) : (
              <Text>No series found</Text>
            )}
          </DescriptionContainer>
        </Section>
      </Container>
    );
  }
  return null;
}

CharacterLoader.propTypes = {
  characterId: PropTypes.string.isRequired,
};

export default CharacterLoader;
