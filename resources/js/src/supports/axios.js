import axios from 'axios';

const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:8000/api" : "localhost/setup-project/public/api";

const instance = axios.create({
    baseURL: baseUrl,
});

export default instance;