import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ayo-ayo.onrender.com/api/v1/register", // Set your API base URL
  timeout: 50000, // Specify a timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Set default request headers
  },
});

export default axiosInstance;
