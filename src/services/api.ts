import axios from 'axios';

import { API_KEY, API_URL } from '../env';

export default axios.create({
  baseURL: API_URL,
  params: {
    lang: 'pt-br',
    units: 'metric',
    appid: API_KEY,
  },
});
