import axios from 'axios';

const BASE_URL = import.meta.env.VITE_VUE_APP_API_PORT;

const api = axios.create({
  baseURL: BASE_URL,
});

const requestGet = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

const requestPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

const requestPut = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
};

const requestDelete = async (endpoint) => {
  const { data } = await api.delete(endpoint);
  return data;
};

export { requestGet, requestPost, requestPut, requestDelete };
