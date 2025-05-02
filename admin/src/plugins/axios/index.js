import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: '/api',
})

axiosInstance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.error('Response Error', error)
  return Promise.reject(error);
});
