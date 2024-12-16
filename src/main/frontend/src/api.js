import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:8080/casdemo/api/',
    withCredentials: true,
    timeout: 1000
});