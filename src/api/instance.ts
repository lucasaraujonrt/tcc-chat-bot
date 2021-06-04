import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseUrL } from '@mobile/config/env.json';
import * as StorageService from '@mobile/services/storage';

export const getInstance = async () => {
  const accessToken = await StorageService.getItem('accessToken');
  const header = {
    'Content-Type': 'application/json',
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  };

  const axiosInstance = axios.create({
    baseURL: baseUrL,
    timeout: 35000,
    headers: header,
  });

  axiosInstance.interceptors.request.use(
    (request: AxiosRequestConfig) => request
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (err) => {
      return Promise.reject(err.response.data.error);
    }
  );

  return axiosInstance;
};

export default getInstance;
