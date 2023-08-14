import axios, { AxiosError } from "axios";
import type { IAnime } from "../types/types";
import { checkAxiosError } from "@helpers/globalHelpers";

export const fetchSeasonalAnime = async (APIbase: string) => {
  try {
    const response = await axios.get<IAnime[] | null>(`${APIbase}/seasons/now?limit=15`, {
      timeout: 1500,
    });
    const data = response.data;
    return data;
  } catch (error) {
    checkAxiosError(error, "GET SEASONAL ANIME NOW");
    return null;
  }
};
