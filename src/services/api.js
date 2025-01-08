import axios from 'axios';

const config = {
  baseURL: "https://foodexplorer-api-3l1o.onrender.com"
}

export const api = axios.create(config);