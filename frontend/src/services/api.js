import axios from "axios";

const API = "http://localhost:5000/api";

export const login = (email) =>
  axios.post(`${API}/auth/login`, { email });

export const predict = (data, token) =>
  axios.post(`${API}/predict`, data, {
    headers: { Authorization: token },
  });
