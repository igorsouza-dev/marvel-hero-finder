import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SearchBar from 'components/SearchBar';

// prettier-ignore
import { reset } from 'store/actions';
import { Container, SubTitle, Divider, Logo } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const history = useHistory();
  function search(input) {
    history.push(`/search?q=${input}`);
    dispatch(reset());
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
