import axios, { AxiosError } from "axios";
import type { IGenre, IGenres } from "../types/types";
import { checkAxiosError } from "@helpers/globalHelpers";

export const fetchAnimeGenres = async (APIbase: string) => {
  try {
    const response = await axios.get<IGenres | null>(`${APIbase}/genres/anime`, {
      timeout: 1500,
    });
    const data = response.data;
    return data;
  } catch (error) {
    checkAxiosError(error, "GET ALL GENRES");
    return null;
  }
};
