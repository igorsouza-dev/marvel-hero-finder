import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
// eslint-disable-next-line
import GlobalStyle from './styles/global';
import Main from 'pages/Main';
import apollo from 'services/apollo';

export default function App() {
  return (
    <ApolloProvider client={apollo}>
      <GlobalStyle />
      <Main />
    </ApolloProvider>
  );
}
