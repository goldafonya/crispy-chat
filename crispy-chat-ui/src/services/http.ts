import axios from "axios";

const http = axios.create();
http.interceptors.response.use(function (response) {
  if (response.status === 401) window.location.reload();
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export { http };