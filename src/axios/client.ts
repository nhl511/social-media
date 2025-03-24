import axios from "axios";

export const apiCaller = axios.create({
    baseURL: 'http://localhost:5173',
    timeout: 10 * 1000,
    headers: {
        "Content-Type": "application/json",
    },
});

apiCaller.interceptors.response.use(
    response => response.data,
    error => error?.response?.data,
);