import axios from 'axios';

const token = window.localStorage.getItem('token')
  ? JSON.stringify(window.localStorage.getItem('token'))
  : undefined;

axios.defaults.baseURL = ''
axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }

export default axios