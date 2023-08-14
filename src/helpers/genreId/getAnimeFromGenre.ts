import { checkAxiosError } from "@helpers/globalHelpers";
import type { IAnime, IAnimeObj } from "@helpers/types/types";
import axios from "axios";

export const getAnimeFromGenre = async (
  genreId: number | string | null,
  APIbase: string,
  page: number,
  searchParams: URLSearchParams,
  type?: "airing" | "upcoming" | "bypopularity" | "seasonnow"
): Promise<IAnimeObj | null> => {
  try {
    const sort = searchParams.get("sort") ?? "desc";
    const order = searchParams.get("order") ?? "score";

    let query;
    if (type && type !== "seasonnow") {
      query = `${APIbase}?filter=${type}&order_by=${order}&sort=${sort}&page=${page}&limit=21`;
    } else if (type && type === "seasonnow") {
      query = `${APIbase}?limit=21&page=${page}`;
    } else
      query = `${APIbase}?genres=${genreId}&order_by=${order}&sort=${sort}&page=${page}&limit=21`;
    // console.log(query);

    const response = await axios.get<IAnimeObj>(query);
    return response.data;
  } catch (error) {
    checkAxiosError(
      error,
      `GET ANIME FROM ${type ? "TYPE=${type}" : "GENRES"}`
    );
    return null;
  }
};
