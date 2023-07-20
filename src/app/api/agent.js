import axios from 'axios';

const baseURL = 'http://localhost:5046'; // Replace with your actual base URL

const agent = axios.create({
  baseURL,
  timeout: 5000, // Add any default configurations you need
});

export default agent;
