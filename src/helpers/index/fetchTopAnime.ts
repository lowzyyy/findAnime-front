import axios, { AxiosError } from "axios";
import type { ITopAnime } from "../types/types";
import { checkAxiosError } from "@helpers/globalHelpers";

export const fetchTopAnime = async (APIbase: string) => {
  try {
    const response = await axios.get<ITopAnime | null>(`${APIbase}/topanime?all=true`, {
      timeout: 1500,
    });
    const data = response.data;
    return data;
  } catch (error) {
    checkAxiosError(error, "GET TOP ANIME");
    return null;
  }
};
