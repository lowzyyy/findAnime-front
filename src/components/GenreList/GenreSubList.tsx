import React, { useState } from "react";
import type { IGenre } from "../../helpers/types/types";
import { addUnderscore } from "@helpers/globalHelpers";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import SubListItem from "./SubListItem";

function GenreSubList({
  genres,
  genreName,
  multiple,
  addSelected,
}: {
  genres: IGenre[];
  genreName: string;
  multiple: boolean;
  addSelected: React.Dispatch<React.SetStateAction<Set<number>>>;
}) {
  return (
    <div className="">
      <h1 className=" mb-2 border-b border-indigo-700 pb-1 text-xl font-medium text-black md:text-2xl">
        {genreName}
      </h1>
      <ul className="mb-6 grid w-full grid-cols-2 gap-y-3 xs:gap-y-4 sm:grid-cols-3   md:grid-cols-4 lg:grid-cols-5 ">
        {genres.map((el, index) => (
          <SubListItem
            key={index}
            genre={el}
            multiple={multiple}
            addSelected={addSelected}
          ></SubListItem>
        ))}
      </ul>
    </div>
  );
}

export default GenreSubList;
