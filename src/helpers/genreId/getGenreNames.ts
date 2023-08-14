import { checkAxiosError } from "@helpers/globalHelpers";
import axios from "axios";

export const getGenreNames = async (ids: string, API: string) => {
  try {
    const response = await axios.get<string[]>(
      `${API}/genres/getIDs?ids=${ids}`
    );

    return response.data;
  } catch (error) {
    checkAxiosError(error, `ERROR FETCH GENRE NAMES`);
    return [];
  }
};
