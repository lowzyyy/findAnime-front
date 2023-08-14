import { checkAxiosError } from "@helpers/globalHelpers";
import type { IAnime } from "@helpers/types/types";
import axios, { AxiosError } from "axios";

export const getAnimeDetails = async (
  id: number,
  APIbase: string
): Promise<IAnime | null> => {
  try {
    const query = `${APIbase}/${id}/full`;
    // console.log(query);

    const response = await axios.get<{ data: IAnime }>(query, {
      timeout: 1500,
    });
    const data = response.data.data;
    return data;
  } catch (error) {
    checkAxiosError(error, "GET ANIME DETAILS");
    return null;
  }
};
