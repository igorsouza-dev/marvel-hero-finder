import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './store';

import GlobalStyle from './styles/global';

// eslint-disable-next-line
import apollo from 'services/apollo';
import history from './services/history';
import Routes from './routes';

export default function App() {
  return (
    <ApolloProvider client={apollo}>
      <Provider store={store}>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
        </Router>
      </Provider>
    </ApolloProvider>
  );
}
