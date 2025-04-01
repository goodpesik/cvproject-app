
import axios from 'axios';
import { COOKIE_AUTH, deleteCookie, getCookie } from '../helpers/cookie.helper';
import Router from 'next/router';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(getCookie(COOKIE_AUTH) || '{}')?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
        if (typeof window !== 'undefined') {
          deleteCookie(COOKIE_AUTH, window.location.hostname);
          Router.push('/');
        }
      }
  
      return Promise.reject(error);
    }
  );

export default api;
