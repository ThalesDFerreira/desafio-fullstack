import axios from 'axios';

const API_KEY = import.meta.env.VITE_VUE_APP_API_KEY;
const BASE_URL = import.meta.env.VITE_VUE_APP_API_PORT;

const CONFIG = {
  headers: {
    apikey: API_KEY,
  },
};

const api = axios.create({
  baseURL: BASE_URL,
});

const requestGet = async (endpoint) => {
  const { data } = await api.get(endpoint, CONFIG);
  return data;
};

const requestPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body, CONFIG);
  return data;
};

const requestPut = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body, CONFIG);
  return data;
};

const requestDelete = async (endpoint) => {
  const { data } = await api.delete(endpoint, CONFIG);
  return data;
};

export { requestGet, requestPost, requestPut, requestDelete };
