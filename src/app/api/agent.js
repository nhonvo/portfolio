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

const emails = {
  send: (email, name, content) =>
    axios
      .post('Mail', {
        name,
        email,
        content,
      })
      .then((response) => {
        console.log('Mail sent successfully!');
        // Add any success message or update state if necessary
        return response.data; // If you want to return something from the response
      })
      .catch((error) => {
        console.error('Error sending mail:', error);
        // Handle any error scenarios or update state if necessary
        throw error; // Propagate the error further if needed
      }),
}

const agent = {
  projects,
  mes,
  achievements,
  skills,
  emails
}
export default agent;

