import axios from 'axios';

const BASE_URL = 'https://api.github.com/repos/zeit/next.js';

export function fetchNextData() {
  return axios({
    method: 'get',
    url: BASE_URL
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    throw error;
  });
}
