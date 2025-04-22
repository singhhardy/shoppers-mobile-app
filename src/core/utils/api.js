import axios from 'axios';

const apiUrl = 'https://shoppers-eight.vercel.app/api/';

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-type': 'application/json',
  },
});

export default api