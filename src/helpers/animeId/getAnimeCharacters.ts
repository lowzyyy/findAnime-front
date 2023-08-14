import { checkAxiosError } from "@helpers/globalHelpers";
import type { CharacterInfo } from "@helpers/types/types";
import axios from "axios";

export const getAnimeCharacters = async (animeId: number) => {
  try {
    const response = await axios.get<{ data: CharacterInfo[] }>(
      `https://api.jikan.moe/v4/anime/${animeId}/characters`
    );

    return response.data.data;
  } catch (error) {
    checkAxiosError(error, "GET ANIME CHARACTERS");
    return null;
  }
};
