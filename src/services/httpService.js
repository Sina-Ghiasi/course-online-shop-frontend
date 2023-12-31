import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export default http;
