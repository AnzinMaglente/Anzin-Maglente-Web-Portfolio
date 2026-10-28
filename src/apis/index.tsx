import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // optional
});

// Add a request interceptor to always attach the current token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      delete config.headers["Authorization"];
    }
    return config;
  },
  (error) => Promise.reject(error)
);
