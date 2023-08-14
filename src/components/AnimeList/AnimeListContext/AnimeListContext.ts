import type { IPagination, TNav } from "@helpers/types/types";
import type { Params } from "astro";
import { createContext } from "react";

export const AnimeListContext = createContext<{
  url: URL;
  pagination: IPagination;
  params: Params;
  navType: TNav;
} | null>(null);
