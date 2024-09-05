import { axiosInstance } from './axios';

export async function apiService(): Promise<any> {
  const result = await axiosInstance.get('');
  return result.data;
}
