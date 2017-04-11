import axios from 'axios';

const cacheImageResults = new Map();

export default function getImage(url) {
  if (cacheImageResults.has(url)) {
    return preservePromiseMethods(cacheImageResults.get(url));
  }

  return axios.get(url, { responseType: 'arraybuffer' })
    .then((response) => {
      cacheImageResults.set(url, response);
      return response;
    })
    .catch((error) => {
      cacheImageResults.set(url, error);
      return error;
    })
    .then(preservePromiseMethods);
}

function preservePromiseMethods(result) {
  if (result instanceof Error) {
    return Promise.reject(result);
  }

  return Promise.resolve(result);
}
