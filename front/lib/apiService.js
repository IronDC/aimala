import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const gamesOwnedFromApi = async () => {
  const response = await api.get("/user");
  console.info("GAMES OWNED BY USER");
  console.log(response.data.gamesOwned);
  return response.data.gamesOwned;
};

export const platformsFromApi = async () => {
  const response = await api.get("/user");
  console.info("PLATFORMS OWNED BY USER");
  console.log(response.data.platformsOwned);
  return response.data.platformsOwned;
};

export const articlesFromApi = async () => {
  const response = await api.get("/article");
  console.info("ARTICLES FROM API");
  console.log(response.data);
  return response.data;
};

export const gamesFromApi = async () => {
  const response = await api.get("/game");
  console.info("ALL GAMES FROM API");
  console.log(response.data);
  return response.data;
};

export const addGametoUserFromApi = async (id) => {
  const response = await api.put(`/user/${id}/addgame`);
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
