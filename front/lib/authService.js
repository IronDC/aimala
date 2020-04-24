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
    console.log("Logged Out");
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
  console.log(`Registering User...`);
  const res = await api.post("/user/signup", {
    username: data.username,
    password: data.password,
    email: data.email,
  });
  console.log("Created User");
  return res.data;
};

export const doLogin = async (data) => {
  console.log("Login user...");
  const res = await api.post("/user/login", {
    username: data.username,
    password: data.password,
  });
  return res.data;
};

export const doLogout = async () => {
  const res = await api.get("/user/logout");
  return res.data;
};

export const whoami = async () => {
  const res = await api.get("/user/whoami");
  return res.data;
};
