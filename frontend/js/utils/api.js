import axios from 'axios';

const api = axios.create({ responseType: 'json' });

class Api {
  static me() {
    return api
      .get('/api/me/')
      .then((res) => res.data)
      .catch((err) => console.log(err.response));

  }
}

export default Api;
