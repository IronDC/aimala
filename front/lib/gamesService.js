import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const gamesFromApi = async () => {
  const response = await api.get("/user");
  console.info("GAMES OWNED BY USER");
  console.log(response.data.gamesOwned);
  return response.data.gamesOwned;
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
