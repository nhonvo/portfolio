import axios from 'axios';

const baseURL = 'https://portfolio-truongnhon.azurewebsites.net/'; // Replace with your actual base URL

const agent = axios.create({
  baseURL,
  timeout: 5000, // Add any default configurations you need
});

export default agent;
