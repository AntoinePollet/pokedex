import axios, { type AxiosInstance } from 'axios';

export const http: AxiosInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        'Content-Type': 'application/json'
    }
});
