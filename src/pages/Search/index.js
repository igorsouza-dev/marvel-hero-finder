import React from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import Searcher from 'components/Searcher';
import { TopContainer, Back, Container } from './styles';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const query = useQueryParams();
  const history = useHistory();

  return (
    <Container>
      <TopContainer>
        <Back onClick={() => history.push('/')}>Go back</Back>
      </TopContainer>
      <Searcher input={query.get('q')} />
    </Container>
  );
}
