import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.marvelql.com/',
});

export default client;
