import axios from "axios";

export const instance = axios.create({
    baseURL: '/api',
    withCredentials: true,
    timeout: 1000
});