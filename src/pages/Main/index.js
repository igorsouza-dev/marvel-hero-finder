import React from 'react';
import { useHistory } from 'react-router-dom';

import SearchBar from 'components/SearchBar';

// prettier-ignore
import {
  Container,
  Header,
  SubTitle,
  Divider,
} from './styles';

export default function Main() {
  const history = useHistory();
  function search(input) {
    history.push(`/search?q=${input}`);
  }


  return (
    <Container>
      <Header>
        <img src="/marvel.svg" alt="marvel" />
        <Divider />
        <SubTitle>Character Finder</SubTitle>
        <SearchBar onSearch={search} />
      </Header>

    </Container>
  );
}
