import React, { useState } from "react";

import { ArrowSmallDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import type { IGenres } from "../../helpers/types/types";
import GenreSubList from "./GenreSubList";

function GenreList({ data }: { data: IGenres }) {
  const [showGenres, setShowGenres] = useState(false);
  const [multiple, setMultiple] = useState(false);
  const [allSelected, setAllSelected] = useState<Set<number>>(new Set());
  return (
    <div className="mt-4 ">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowGenres((state) => !state)}
          className={`flex items-center rounded-sm bg-indigo-400   py-1 
        pl-0 pr-2  text-sm  text-white transition-[background]
        duration-200 hover:bg-indigo-500 xs:text-base `}
        >
          <ArrowSmallDownIcon className="h-7" />
          Search by genre
        </button>
        <div className="gap-2 sm:flex sm:flex-row-reverse">
          <span
            className={`flex items-center gap-1 ${
              showGenres ? "inline" : "hidden"
            }`}
          >
            <CheckIcon
              onClick={() => {
                if (multiple) setAllSelected(new Set());
                setMultiple(!multiple);
              }}
              className={`h-5 border-2 border-black ${
                multiple ? "text-black" : "text-sky-100"
              }`}
            ></CheckIcon>
            Multiple
          </span>
          {allSelected.size > 0 && (
            <button
              onClick={() =>
                window.location.assign(
                  `/anime/genre/multiple?genres=${[...allSelected].join(",")}`
                )
              }
              className="cursor-pointer rounded-md bg-blue-400 p-1 text-white hover:bg-blue-500"
            >
              Search multiple
            </button>
          )}
        </div>
      </div>
      <div className=" mt-2 grid text-slate-800">
        <div className="flex flex-col">
          <div
            className={`overflow-hidden transition-all ${
              showGenres ? "flex-1" : "basis-0"
            }`}
          >
            <GenreSubList
              addSelected={setAllSelected}
              genres={data.genres}
              genreName={"Genres"}
              multiple={multiple}
            />
            <GenreSubList
              addSelected={setAllSelected}
              genres={data.explicit_genres}
              genreName={"Explicit genres"}
              multiple={multiple}
            />
            <GenreSubList
              addSelected={setAllSelected}
              genres={data.themes}
              genreName={"Themes"}
              multiple={multiple}
            />
            <GenreSubList
              addSelected={setAllSelected}
              genres={data.demographics}
              genreName={"Demographics"}
              multiple={multiple}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenreList;
