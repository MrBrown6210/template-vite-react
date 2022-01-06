import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
console.log("apiUrl", apiUrl);

axios.defaults.baseURL = apiUrl;

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.baseURL!);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem("token");
    if (allowedOrigins.includes(origin)) {
      config.headers!.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
