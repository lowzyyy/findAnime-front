import React, { useRef, useState } from "react";
import { addUnderscore, durationFormat } from "@helpers/globalHelpers";
import type { CharacterInfo, IAnime } from "@helpers/types/types";
import Synopsis from "./Synopsis/Synopsis";
import GenreLinks from "./Information/GenreLinks";
import InfoItem from "./Information/InfoItem";
import Statistics from "./Statistics/Statistics";
import CharactersList from "./Characters/CharactersList";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Information from "./Information/Information";

type Props = {
  name: string;
  alternativeName: string | undefined;
  details: IAnime;
  characters: CharacterInfo[];
  url: URL;
};

function AnimeCard({ name, alternativeName, details, characters, url }: Props) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="relative">
      <header className="mb-2 flex flex-col gap-2 border border-b-black bg-indigo-50 p-1 sm:p-2 ">
        <h1 className="text-lg sm:text-xl">{name}</h1>
        {name !== alternativeName && alternativeName && (
          <h3 className="text-sm text-gray-700 sm:text-base">
            {alternativeName}
          </h3>
        )}
      </header>
      <section className="flex w-full gap-3">
        <div className="flex min-w-[140px] max-w-[140px] flex-col sm:min-w-[180px]">
          <div className="mb-2 max-h-[400px]  shrink-0 overflow-hidden">
            <img
              className=" object-contain"
              src={`${details.images.webp.large_image_url}`}
              alt={`${name} anime image`}
            />
          </div>
          <div className="hidden sm:block">
            <h5 className="mb-2 border-b border-slate-500 p-1">Information</h5>
            <Information details={details} url={url}></Information>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 sm:gap-3">
          <Statistics details={details}></Statistics>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="flex items-center justify-center self-center rounded-sm bg-indigo-200 px-3 py-1 sm:hidden"
          >
            <ChevronRightIcon className="h-5"></ChevronRightIcon>Information
          </button>
          <div className="hidden sm:block">
            <Synopsis
              shouldScrollIntoView={false}
              background={details.background}
              synopsis={details.synopsis}
            ></Synopsis>
            <CharactersList
              name={addUnderscore(details.titles[0].title)}
              id={details.mal_id}
              characters={characters}
            />
          </div>
        </div>
      </section>
      <section className="p-1 sm:hidden">
        <Synopsis
          shouldScrollIntoView={true}
          background={details.background}
          synopsis={details.synopsis}
        ></Synopsis>
        <CharactersList
          name={addUnderscore(details.titles[0].title)}
          id={details.mal_id}
          characters={characters}
        />
      </section>
      {showInfo && (
        <div
          onClick={(e: any) => {
            if (e.currentTarget === e.target) setShowInfo(false);
          }}
          className="absolute top-0 flex h-full w-full justify-center bg-black bg-opacity-20 backdrop-blur-sm"
        >
          <div className="w-[95%] translate-y-[20%] self-start rounded-sm bg-white p-3">
            <Information details={details} url={url}></Information>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimeCard;
