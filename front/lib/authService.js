import axios from "axios";
import React, { useContext } from "react";

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
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export const doSignup = async (username, password,email) => {
  // Axios post a ruta /auth/signup en servidor
  // para crear un usuario en mongodb
  console.log(`Registrando usuario...`);
  console.log(username, password,email);
  const res = await api.post("/user/signup", {
    username,
    password,
    email
  });
  console.log("Created User");
  console.log(res.data);
  return res.data;
};

export const doLogin = async (username, password,email) => {
  console.log("Do Login");
  const res = await api.post("/user/login", {
    username,
    password,
    email
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
  console.log(res.data);
  return res.data;
};



