import axios from "axios";

export const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API,
    withCredentials: true,
    timeout: 1000
});