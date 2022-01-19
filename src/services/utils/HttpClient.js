import axios from 'axios';

let API_URL = '';

if (process.env.VUE_APP_ENV === 'env') {
  API_URL = 'http://localhost:8000/api/v1';
} else {
  API_URL = 'https://portalmg-server.herokuapp.com/api/v1';
}

export const Http = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
