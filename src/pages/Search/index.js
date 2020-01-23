import React from 'react';

import { useLocation } from 'react-router-dom';

import Searcher from 'components/Searcher';
import Page from 'components/Page';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const query = useQueryParams();

  return (
    <Page>
      <Searcher input={query.get('q')} />
    </Page>
  );
}
