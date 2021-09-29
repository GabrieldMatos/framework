import axios, { AxiosError } from 'axios';
import { MESSAGES } from '../utils/constants';
export interface ResponseError {
  status?: number;
  message: string;
}

const getMessage = (status?: number): string => {
  switch (status) {
    case 403:
      return MESSAGES.NOT_AUTHRIZED;
    case 404:
      return MESSAGES.NOT_FOUND;
    case 500:
      return MESSAGES.ERROR;

    default:
      return MESSAGES.ERROR;
  }
};

export const errorHandler = (err: AxiosError): ResponseError => {
  return {
    status: err?.response?.status || 500,
    message: err?.response?.data?.message || getMessage(err?.response?.status),
  };
};

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export const baseURL = process.env.REACT_APP_API_URL;
export default api;
