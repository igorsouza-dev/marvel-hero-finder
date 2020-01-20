import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

export default api;
