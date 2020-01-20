import React, { useEffect, useState } from 'react';
import md5 from 'md5';

import { Container, CharCard } from './styles';
import api from 'services/api';

export default function Main() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function getCharacters() {
      try {
        const ts = new Date().getTime();
        const apikey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
        const hash = md5(
          `${ts}${process.env.REACT_APP_MARVEL_API_KEY}${apikey}`
        );
        const response = await api.get('characters', {
          params: { ts, apikey, hash },
        });
        const { results } = response.data.data;
        setCharacters(results);
      } catch (e) {
        console.error(e.message);
      }
    }
    getCharacters();
  }, []);
  return (
    <Container>
      {characters.map((character) => (
        <CharCard>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <strong>{character.name}</strong>
        </CharCard>
      ))}
    </Container>
  );
}
