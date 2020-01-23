import axios from 'axios';
const url =  
  'https://usuariocrudbackend.herokuapp.com/api';  
  // 'http://localhost:5000/api';

const clientAxios = axios.create({ baseURL: url });
export default clientAxios;