import Config from 'react-native-config';

import axios from 'axios';

const COMMON_HEADERS = {
  'Content-Type': 'application/json',
};

export const HOST_URL = Config.API_HOST;

const api = axios.create({
  baseURL: HOST_URL,
  headers: COMMON_HEADERS,
});

export default api;
