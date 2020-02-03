import axios from 'axios';
import cookie from 'cookie';

const initializeApi = () => {
  const api = axios.create({ responseType: 'json' });
  // TODO: Is this needed?
  // api.defaults.xsrfCookieName = 'csrftoken';
  // api.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  api.interceptors.request.use((config) => {
    const { csrftoken } = cookie.parse(document.cookie);
    const updatedConfig = config; // Cria uma cópia das configurações atuais, nunca modificar a original
    if (csrftoken) {
      updatedConfig.headers['X-CSRFTOKEN'] = csrftoken;
    }
    return updatedConfig;
  });

  return api;
};

const api = initializeApi();

class Api {
  static getTodos() {
    return api
      .get('/api/todos/')
      .then((response) => response.data)
      .catch((err) => console.log(err.response));
  }

  static createTodo(data) {
    return api
      .post('/api/todos/', data)
      .then((response) => response.data)
      .catch((err) => console.log(err.response));
  }

  static updateTodo(id, data) {
    return api
      .patch(`/api/todos/${id}/`, data)
      .then((response) => response.data)
      .catch((err) => console.log(err.response));
  }
}

export default Api;
