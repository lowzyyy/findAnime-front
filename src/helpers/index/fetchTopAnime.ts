import axios, { AxiosError } from "axios";
import type { ITopAnime } from "../types/types";

export const fetchTopAnime = async (APIbase: string) => {
  try {
    const response = await axios.get<ITopAnime>(`${APIbase}/topanime?all=true`, {
      timeout: 1500,
    });
    const data = response.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) console.log(`Error occurred: ${error.message}`);
    return {
      topAiring: { data: [] },
      topUpcoming: { data: [] },
      mostPopular: { data: [] },
    };
  }
};
