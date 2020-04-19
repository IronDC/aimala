import axios from "axios";
// require("dotenv").config();

const api = axios.create({
  baseURL:process.env.BACK_URL,
  withCredentials: true,
});

export const gamesOwnedFromApi = async () => {
  const response = await api.get("/user");
  return response.data.gamesOwned;
};

export const platformsOwnedFromApi = async () => {
  const response = await api.get("/user");
  return response.data.platformsOwned;
};

export const articlesFromApi = async () => {
  const response = await api.get("/article");
  return response.data;
};

export const gamesFromApi = async () => {
  const response = await api.get("/game");
  return response.data;
};

export const addGametoUserFromApi = async (id) => {
  const response = await api.put(`/user/${id}/addgame`);
  return response.data;
};

export const newGameApi = async (dataFile) => {
  const data = new FormData();
  data.append("cover", dataFile.cover);
  data.append("title", dataFile.title);
  data.append("year", dataFile.year);
  data.append("publisher", dataFile.publisher);
  data.append("description", dataFile.description);
  data.append("trailer", dataFile.trailer);
  console.log("todos los campos con append");
  console.log(data);
  const response = await api.post(`/game/create`, data);
  return response.data;
};

export const platformsFromApi = async () => {
  const response = await api.get("/platform");
  return response.data;
};

export const addPlatformtoUserFromApi = async (id) => {
  const response = await api.put(`/user/${id}/addplatform`);
  return response.data;
};

export const newPlatformApi = async (dataFile) => {
  console.log("this is Datafile");
  console.log(dataFile);
  const data = new FormData();
  data.append("image", dataFile.image);
  data.append("name", dataFile.name);
  data.append("year", dataFile.year);
  data.append("description", dataFile.description);
  const response = await api.post(`/platform/create`, data);
  return response.data;
};

// export const GameDetails = async (id) => {
//   console.info("ONE GAME ID:");
//   console.log(id);
//   const response = await api.get(`/game/${id}`);
//   console.info("ONE GAME");
//   console.log(response.data);
//   return response.data;
// };

// export const beerDetails = async (id) => {
//   const response = await beersApi.get(`/beers/${id}`);
//   return response.data;
// };

// export const randomBeer = async () => {
//   const response = await beersApi.get("/beers/random");
//   return response.data;
// };

// export const createBeer = async (data) => {
//   const response = await beersApi.post(`/beers/new`, data);
//   return response.data;
// };

// export const searchBeers = async (query) => {
//   const response = await beersApi.get(`/beers/search?q=${query}`);
//   return response.data;
// };
