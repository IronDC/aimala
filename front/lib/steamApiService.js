import axios from "axios";


const api = axios.create({
  baseURL: process.env.STEAMURL,
});

export const gamesFromSteamApi = async () => {
  console.log("hola mundo");
  const response = await api.get();
  console.log(response);
  return response.data;
};
