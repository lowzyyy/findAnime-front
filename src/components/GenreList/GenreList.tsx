import React, { useState } from "react";

import { ArrowSmallDownIcon } from "@heroicons/react/20/solid";
import type { IGenres } from "../../helpers/types/types";
import GenreSubList from "./GenreSubList";

function GenreList({ data }: { data: IGenres }) {
  const [showGenres, setShowGenres] = useState(false);
  return (
    <div className="mt-4 ">
      <button
        onClick={() => setShowGenres((state) => !state)}
        className={`flex items-center rounded-md bg-gradient-to-br from-blue-300 to-violet-400
        bg-400% bg-[100%]  py-1 
        pl-0 pr-2  text-sm  text-white transition-[background]
        duration-200 hover:from-indigo-200 hover:to-indigo-500 hover:bg-[60%] xs:text-base `}
      >
        <ArrowSmallDownIcon className="h-7" />
        Search by genre
      </button>
      <div className="mt-4 grid text-slate-800">
        <div className="flex flex-col">
          <div
            className={`overflow-hidden transition-all ${
              showGenres ? "flex-1" : "basis-0"
            }`}
          >
            <GenreSubList genres={data.genres} genreName={"Genres"} />
            <GenreSubList genres={data.explicit_genres} genreName={"Explicit genres"} />
            <GenreSubList genres={data.themes} genreName={"Themes"} />
            <GenreSubList genres={data.demographics} genreName={"Demographics"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenreList;
