import axios from "axios";
// require("dotenv").config();

const api = axios.create({
  baseURL: process.env.BACK_URL,
  withCredentials: true,
});

const api = axios.create({
  steamURL: `${process.env.STEAMURL_PART1}:steamid${process.env.STEAMURL_PART2}`,
});

gamesfromsteamapi (id) =>
get.steamURL
