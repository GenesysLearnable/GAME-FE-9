import axios from "axios";

// Create an Axios instance with a base URL
const avatars = axios.create({
  baseURL: "https://ayo-ayo.onrender.com/api/v1/avatar-list",
  timeout: 50000, // Specify a timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Set default request headers
  },
});

export default avatars;
