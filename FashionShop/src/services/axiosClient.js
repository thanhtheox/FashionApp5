import axios from 'axios';
import {getAccessToken} from './token/get-token';
import {refreshToken} from './token/refresh-token';
import { BASE_URL } from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  async function (config) {
    const token = await getAccessToken();
    if (token) {
      config.headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (err) {
    const originalConfig = err.config;

    if (err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const accessToken = await refreshToken();
          await AsyncStorage.setItem('@access-token', accessToken);
          axios.defaults.headers.common = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          };

          return axiosClient(originalConfig);
        } catch (error) {
          if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
          }

          return Promise.reject(error.response.data);
        }
      }
    }

    console.log(err);
    return Promise.reject(err.response.data);
  },
);

export default axiosClient;
