import axios from 'axios';
import { COOKIE_AUTH, getCookie } from '../helpers/cookie.helper';
import { useApiLoaderStore } from './stores/apiLoaderStore';

declare module 'axios' {
  export interface AxiosRequestConfig {
    isKey?: boolean;
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const KEY = process.env.NEXT_PUBLIC_API_KEY;
export const IMAGE_URL = `${BASE_URL}`;

const api = axios.create({
  baseURL: BASE_URL,
});

let store: typeof useApiLoaderStore;

if (typeof window !== 'undefined') {
  store = require('../lib/stores/apiLoaderStore').useApiLoaderStore;
}

api.interceptors.request.use((config) => {
  if (store) store.getState().start();
  return config;
});

api.interceptors.response.use(
  (response) => {
    if (store) store.getState().stop();
    return response;
  },
  (error) => {
    if (store) store.getState().stop();
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(getCookie(COOKIE_AUTH) || '{}')?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.isKey) {
      config.headers.Authorization = KEY;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 403 || status === 401) {
      error.isAuthError = true;
    }

    return Promise.reject(error);
  },
);

export default api;
