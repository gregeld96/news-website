import Axios from 'axios';
import ErrorHandler from './error-handler';

const httpClient = Axios.create();

let apiUrl = 'http://localhost:3000/api/v1/';

const HttpPost = async (url, data, tempToken) => {
  const accessToken = localStorage.getItem('access-token');

  return httpClient.post(apiUrl + url, data, {
    headers: {
      "access_token": accessToken,
    },
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      ErrorHandler(error);
      throw error;
    });
};

const HttpPut = async (url, data, tempToken) => {
  const accessToken = localStorage.getItem('access-token');

  return httpClient.put(apiUrl + url, data, {
    headers: {
      "access_token": accessToken,
    },
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      ErrorHandler(error);
      throw error;
    });
};

const HttpGet = async (url, tempToken) => {
  const accessToken = localStorage.getItem('access-token');

  return httpClient
    .get(apiUrl + url, {
        headers: {
            "access_token": accessToken,
        },
    })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.log(error);
      ErrorHandler(error);
      throw error;
    });
};

const HttpGetWithoutToken = async (url) => {
  return httpClient
    .get(apiUrl + url)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      ErrorHandler(error);
      throw error;
    });
};

export { HttpPost, HttpGet, HttpGetWithoutToken, HttpPut };
