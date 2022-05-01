import axios from "axios";

// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': 'b9cb32d90dmshab05d04d379ff7bp1e4fe1jsne04c4c2b5e8d'
//   }

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
