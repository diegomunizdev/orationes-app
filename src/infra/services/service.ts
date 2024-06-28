import { axiosInstance } from './axios';

export const apiService = async (): Promise<any> => {
  const result = await axiosInstance.get('');
  return result.data;
};
