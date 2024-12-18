import axios from "axios";

export const instance = axios.create({
    baseURL: backendUrl("api/"),
    withCredentials: true,
    timeout: 1000
});

export function backendUrl(href) {
    return `${import.meta.env.VITE_BACKEND_URL_HOME}/${href}`;
}