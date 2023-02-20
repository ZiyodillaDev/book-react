import axios from "axios";

const BASE_URL = "http://localhost:5000/user";

export const api = {
  userRegister: (user) => axios.post(BASE_URL + "/register", user),
  userLogin: (user) => axios.post(BASE_URL + "/login", user),
  getUser: (user) => axios.get(BASE_URL + "/me", user),
  getProfile: (user) => axios.put(BASE_URL + "/account", user),
  getSecurity: (user) => axios.put(BASE_URL + "/secutiry", user),
};
