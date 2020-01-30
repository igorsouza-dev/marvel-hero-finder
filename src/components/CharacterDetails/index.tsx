import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';
import CharacterForm from 'components/CharacterForm';
import Character from 'types/Character';
import {
  Container,
  Section,
  Picture,
  Text,
  Label,
  DescriptionContainer,
} from './styles';

interface CharacterDetailsProps {
  character: Character;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
  const [showModal, setShowModal] = useState(false);
  const { thumbnail } = character;
  function toggleForm() {
    setShowModal(!showModal);
  }
  return (
    <Container>
      <Section>
        {thumbnail && (
          <Picture src={character.thumbnail} alt={character.name} />
        )}

        <DescriptionContainer>
          <button type="button" onClick={toggleForm}>
            Edit
          </button>
          <Label>Name</Label>
          <Text>{character.name}</Text>
          <Label>Description</Label>
          <Text>{character.description || 'No description provided'}</Text>
          <Label>Series</Label>
          {character.series?.length ? (
            character.series.map((serie) => (
              <Text key={`${Math.floor(Math.random() * 100000)}`}>
                {serie.name}
              </Text>
            ))
          ) : (
            <Text>No series found</Text>
          )}
        </DescriptionContainer>
      </Section>
      {showModal && (
        <Modal onClose={toggleForm}>
          <CharacterForm character={character} onSubmit={toggleForm} />
        </Modal>
      )}
    </Container>
  );
};

CharacterDetails.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnail: PropTypes.string.isRequired,
    series: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
export default CharacterDetails;
