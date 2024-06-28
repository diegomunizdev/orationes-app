import { AxiosInstance, default as axios } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  responseType: 'json',
});
