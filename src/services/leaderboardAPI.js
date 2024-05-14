import axios from "axios";

// Create an Axios instance with a base URL
const API = axios.create({
  baseURL: "https://ayo-ayo.onrender.com/api/v1/leaderboard",
  timeout: 50000, // Specify a timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Set default request headers
  },
});

export default API;
