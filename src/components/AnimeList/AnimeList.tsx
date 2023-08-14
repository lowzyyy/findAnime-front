import type { IAnime, IPagination, TNav } from "@helpers/types/types";
import React from "react";
import AnimeItem from "./AnimeItem/AnimeItem";
import ListNavigation from "./PageNavigation/ListNavigation";
import type { Params } from "astro";
import SortOption from "./Sort/SortOption";
import { AnimeListContext } from "./AnimeListContext/AnimeListContext";

function AnimeList({
  anime,
  url,
  pagination,
  params,
  navType,
}: {
  anime: IAnime[];
  url: URL;
  pagination: IPagination;
  params: Params;
  navType: TNav;
}) {
  return (
    <AnimeListContext.Provider value={{ url, params, navType, pagination }}>
      <div>
        <ListNavigation></ListNavigation>
        {navType !== "category" && navType !== "seasonnow" && (
          <SortOption></SortOption>
        )}
        <div className="border-node my-2 grid grid-cols-1 gap-10 border-orange-500 md:grid-cols-2 xl:my-4 2xl:grid-cols-3">
          {anime.map((el, index) => (
            <AnimeItem url={url} details={el} key={index} />
          ))}
        </div>
        <ListNavigation></ListNavigation>
      </div>
    </AnimeListContext.Provider>
  );
}

export default AnimeList;
