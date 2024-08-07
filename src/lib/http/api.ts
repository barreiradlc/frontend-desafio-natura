import axios from 'axios';

const BASE_URL = import.meta.env.BASE_URL

const api = axios.create({
  baseURL: 'http://localhost:3333'
  // baseURL: BASE_URL  
});

export { api };
