import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const responseBody = (response) => {
  return response.data
};


const projects = {
  list: () =>
    axios.get('project').then(responseBody),
}

const agent = {
  projects,
}
export default agent;

