import React, { useState } from "react";
import type { IAnime } from "../../helpers/types/types";
import { StarIcon, UserIcon } from "@heroicons/react/20/solid";
import { membersFormat } from "../../helpers/globalHelpers";

function SeasonAnimeItem({ animeData }: { animeData: IAnime }) {
  const members = membersFormat(animeData.members);
  return (
    <li
      className={`relative shrink-0  transition-all xl:hover:z-30 xl:hover:scale-110 first:xl:hover:mr-3 first:xl:hover:translate-x-3`}
    >
      <a
        href={`/anime/${animeData.mal_id}/${animeData.titles[0].title.replaceAll(
          " ",
          "_"
        )}`}
      >
        <img
          className="w-[--season-card-min] rounded-md md:w-[--season-card-max]"
          src={`${animeData.images.webp.image_url}`}
          alt={`${animeData.titles[0].title} picture`}
        />
        <div className="absolute top-0  h-full w-full rounded-md bg-gradient-to-t from-black from-5% via-transparent to-black to-95%  opacity-[0.60]"></div>
        <div className="absolute top-0 flex w-full flex-col p-1 text-sm text-stone-100">
          <span className="text-xs xs:text-sm">{animeData.titles[0].title}</span>
          <span className="flex items-center justify-between">
            <span title="Score" className="flex-shrink-1 flex text-base ">
              {<StarIcon className="h-5 text-yellow-300" />}
              {animeData.score}
            </span>
            <span title="Members" className="flex ">
              {<UserIcon className="h-5 text-fuchsia-400" />}
              {members}
            </span>
          </span>
        </div>
        <span
          className={`absolute bottom-0 left-0 flex  w-[--season-genre-max]  flex-col-reverse items-start gap-1  p-1  text-xs text-stone-200 `}
        >
          {[...animeData.genres, ...animeData.explicit_genres].map((el, index) => (
            <span title={`${el.name}`} className="rounded-md bg-[#37f8ee42]" key={index}>
              {el.name}
            </span>
          ))}
        </span>
        <span className="invisible absolute bottom-0 right-0 flex w-[--season-genre-max] flex-col-reverse items-end gap-1 p-1  text-xs text-stone-200 md:visible ">
          {animeData.themes.map((el, index) => (
            <span
              className="flex max-w-[--season-genre-max] shrink grow-0 overflow-hidden whitespace-nowrap rounded-md bg-[#2081ff3d]"
              key={index}
            >
              <span>{el.name}</span>
            </span>
          ))}
        </span>
      </a>
    </li>
  );
}

export default SeasonAnimeItem;
