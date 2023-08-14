import type { AstroGlobal } from "astro";
import { AxiosError } from "axios";

// const myAPI = "http://127.0.0.1:3103";
export const myAPI = "https://findanime.up.railway.app";

export const isNumber = (value: string) => {
  return !isNaN(parseInt(value!!));
};

export const formatNumbers = (value: number | null) => {
  if (!value && value !== 0) return "";
  if (value === 0) return "0";
  if (value < 1000) return value + "";
  if (value < 1_000_000) return (value / 1000).toFixed(0) + "K";
  if (value < 1_000_000_000) return (value / 1_000_000).toFixed(1) + "M";
  return (value / 1_000_000_000).toFixed(0) + "B";
};

export const durationFormat = (durationString: string) => {
  if (durationString.includes("hr")) {
    const result = durationString.match(/(?<hour>\d+).*?(?<minute>\d+)/);
    if (!result) return "Unknown";
    return `${result?.groups!!.hour}hr ${result?.groups!!.minute}min`;
  } else {
    const result = durationString.match(/\d+/);
    if (!result) return "Uknown";
    return `${result!![0]}min`;
  }
};

export const getSeasonNowName = () => {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  if (month <= 3) return "Winter " + year;
  if (month <= 6) return "Spring " + year;
  if (month <= 9) return "Summer " + year;
  return "Fall " + year;
};

export const removeUnderscore = (stringValue: string | undefined) =>
  stringValue ? stringValue.replaceAll("_", " ") : "";

export const addUnderscore = (stringValue: string | undefined) =>
  stringValue ? stringValue.replaceAll(" ", "_") : "";

export const formatCategory = (stringValue: string | undefined) => {
  if (!stringValue) return "";

  if (stringValue === "top-airing") return "airing";
  if (stringValue === "top-upcoming") return "upcoming";
  if (stringValue === "most-popular") return "bypopularity";

  return "";
};

export const checkAxiosError = (error: any, message: string) => {
  if (error instanceof AxiosError)
    console.error(`${message}: ${error.message}`);
  else console.error("OTHER ERROR: ", error.message);
};

export const checkPageAndRedirect = (
  lower: boolean,
  page: string | undefined,
  maxPage?: number
) => {
  const currentPage = parseInt(page!!);
  if (lower) {
    if ((isNumber(page!!) && currentPage < 1) || !isNumber(page!!)) {
      return true;
    }
    return false;
  } else {
    if (isNumber(page!!) && maxPage && currentPage > maxPage) {
      return true;
    }
    return false;
  }
};
