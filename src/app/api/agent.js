import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const responseBody = (response) => {
  return response.data
};


const projects = {
  list: () =>
    axios.get('project').then(responseBody),
}
const mes = {
  me: () =>
    axios.get('me').then(responseBody),
}
const achievements = {
  list: () =>
    axios.get('achievement').then(responseBody),
}
const skills = {
  list: () =>
    axios.get('skill').then(responseBody),
}

const files = {
  list: (name) =>
    axios.get(`Image/Download/${name}`, {
      params: {
        name: name
      }
    }).then(responseBody)
};
const agent = {
  projects,
  mes,
  achievements,
  skills,
  files
}
export default agent;

