import axios from "axios";


const api = axios.create({
  baseURL:process.env.BACK_URL,
  withCredentials: true
});

export const gamesFromSteamApi = async () => {
  try {
    const data = await api.get("/gamessteam");
    return data;
  } catch (err) {
    console.log(err);
  }
};