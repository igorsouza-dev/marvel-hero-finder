import React from 'react';
import { useHistory } from 'react-router-dom';

import SearchBar from 'components/SearchBar';

// prettier-ignore
import {
  Container,
  SubTitle,
  Divider,
  Logo,
} from './styles';

export default function Main() {
  const history = useHistory();
  function search(input) {
    history.push(`/search?q=${input}`);
  }


  return (
    <Container>
      <Logo src="/marvel.svg" alt="marvel" />
      <Divider />
      <SubTitle>Character Finder</SubTitle>
      <SearchBar onSearch={search} />
    </Container>
  );
}
