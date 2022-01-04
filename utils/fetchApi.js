import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "8d4734dacbmshde52aa54698b0b9p187c19jsn15ac5ed26937",
    },
  });
  return data;
};
