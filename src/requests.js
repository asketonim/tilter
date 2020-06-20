import axios from 'axios';

const baseUrl = 'https://notez-ebbe2.firebaseio.com';

export const get = (url) => axios.get(baseUrl + url);

export const post = (url, data) => axios.post(baseUrl + url, data);
