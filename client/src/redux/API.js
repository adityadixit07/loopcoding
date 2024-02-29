// axios interceptor
import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:9898/api",
  baseURL: "https://courseapp-loopcoding.onrender.com/api",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    req.headers.cookie = `token=${localStorage.getItem("token")}`;
  }
  return req;
});

export default API;
