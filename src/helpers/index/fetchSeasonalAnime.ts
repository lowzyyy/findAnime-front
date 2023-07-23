import axios, { AxiosError } from "axios";
import type { IAnime } from "../types/types";

export const fetchSeasonalAnime = async (APIbase: string) => {
  try {
    const response = await axios.get<IAnime[]>(`${APIbase}/seasons/now?limit=15`, {
      timeout: 1500,
    });
    const data = response.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) console.log(`Error occurred: ${error.message}`);
    return [];
  }
};
