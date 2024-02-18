// axios interceptor
import axios from "axios";

const server = "http://localhost:9898/api";

const API = axios.create({
  baseURL: server,
  // baseURL: "/api",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    console.log(req.headers,"req.headers");
    req.headers.cookie = `token=${localStorage.getItem("token")}`;
  }
  return req;
});

export default API;
