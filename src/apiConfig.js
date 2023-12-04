import axios from 'axios';

// Set a base URL for Axios
const api = axios.create({
  baseURL: 'http://localhost:3002', // Replace with your actual API URL
});

export default api;
