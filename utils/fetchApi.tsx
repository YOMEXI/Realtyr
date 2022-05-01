import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": String(process.env.API_KEY),
    },
  });

  return data;
};
