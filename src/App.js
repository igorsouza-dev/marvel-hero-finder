import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

// eslint-disable-next-line
import apollo from 'services/apollo';
import history from './services/history';
import Routes from './routes';

export default function App() {
  return (
    <ApolloProvider client={apollo}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </ApolloProvider>
  );
}
