import axios, { AxiosError } from "axios";
import type { IGenre, IGenres } from "../types/types";

export const fetchAnimeGenres = async (APIbase: string) => {
  try {
    const response = await axios.get<IGenres>(`${APIbase}/genres/anime`, {
      timeout: 1500,
    });
    const data = response.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) console.log(`Error occurred: ${error.message}`);
    return { genres: [], explicit_genres: [], themes: [], demographics: [] };
  }
};
