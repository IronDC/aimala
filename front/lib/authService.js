import axios from "axios";
import React, { useContext } from "react";
// require("dotenv").config();

export const UserContext = React.createContext();

export const useUser = () => {
  const userState = useContext(UserContext);
  return userState.user;
};

export const useUserSetter = () => {
  const userState = useContext(UserContext);
  return userState.setUser;
};

export const useUserIsLoading = () => {
  const userState = useContext(UserContext);
  return userState.loading;
};

export const useUserLogout = () => {
  const userState = useContext(UserContext);
  return async () => {
    console.log("log out!");
    userState.setUser(null);
    return doLogout();
  };
};

const api = axios.create({
  baseURL: process.env.BACK_URL,
  withCredentials: true,
});

export const doSignup = async (data) => {
  // Axios post a ruta /auth/signup en servido
  // para crear un usuario en mongodb
  console.log(`Registing User...`);
  console.log(data);
  const res = await api.post("/user/signup", {
    username: data.username,
    password: data.password,
    email: data.email,
  });
  console.log("Created User");
  console.log(res.data);
  return res.data;
};

export const doLogin = async (data) => {
  console.log("Do Login");
  console.log(data);
  const res = await api.post("/user/login", {
    username: data.username,
    password: data.password,
  });
  console.log(res.data);
  return res.data;
};

export const doLogout = async () => {
  const res = await api.get("/user/logout");
  console.log(res.data);
  return res.data;
};

export const whoami = async () => {
  const res = await api.get("/user/whoami");
  console.log(`You are ${res.data.username}`);
  return res.data;
};
