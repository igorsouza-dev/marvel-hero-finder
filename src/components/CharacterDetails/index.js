import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Section,
  Picture,
  Text,
  Label,
  DescriptionContainer,
} from './styles';


function CharacterDetails({ character }) {
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
          <Text>{character.description || 'No description provided'}</Text>
          <Label>Series</Label>
          {character.series.length ? (
            character.series.map((serie) => (
              <Text key={`${Math.floor(Math.random() * 100000)}`}>{serie.name}</Text>
            ))
          ) : (
            <Text>No series found</Text>
          )}
        </DescriptionContainer>
      </Section>
    </Container>
  );
}

CharacterDetails.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    series: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    thumbnail: PropTypes.oneOfType([
      PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }),
      PropTypes.string,
    ]),
  }).isRequired,
};

export default CharacterDetails;
