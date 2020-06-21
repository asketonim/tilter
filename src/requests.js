import axios from 'axios';

const baseUrl = 'https://tilter-fe20f.firebaseio.com';

export const get = (url) => axios.get(baseUrl + url);

export const post = (url, data) => axios.post(baseUrl + url, data);
