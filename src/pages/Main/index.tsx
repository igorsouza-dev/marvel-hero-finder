import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SearchBar from 'components/SearchBar';
import { reset } from 'store/actions';

// prettier-ignore
import {
  Container, SubTitle, Divider, Logo, Signature
} from './styles';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  function search(input: string) {
    history.push(`/search?q=${input}`);
    dispatch(reset());
  }

  return (
    <Container>
      <Logo src="/marvel.svg" alt="marvel" />
      <Divider />
      <SubTitle>Character Finder</SubTitle>
      <SearchBar onSearch={search} />
      <Signature>
        Developed by
        <a href="https://github.com/igorsouza-dev/marvel-hero-finder">
          Igor Souza
          <img src="github.png" alt="" />
        </a>
      </Signature>
    </Container>
  );
};

export default Main;
