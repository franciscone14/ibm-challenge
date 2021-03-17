import { AxiosRequestConfig } from 'axios';

export const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'http://localhost:3000',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('token')
    }
};