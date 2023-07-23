import React from "react";
import type { IGenre } from "../../helpers/types/types";

function GenreSubList({ genres, genreName }: { genres: IGenre[]; genreName: string }) {
  return (
    <div className="">
      <h1 className=" mb-2 border-b border-indigo-700 pb-1 text-xl font-medium text-black md:text-2xl">
        {genreName}
      </h1>
      <ul className="mb-6 grid w-full grid-cols-2 gap-y-3 xs:gap-y-4 sm:grid-cols-3   md:grid-cols-4 lg:grid-cols-5 ">
        {genres.map((el, index) => (
          <li key={index} className="">
            <a
              href={`anime/genre/${el.mal_id}/${el.name.replaceAll(" ", "_")}`}
              className=" cursor-pointer rounded-md p-1 text-blue-600 hover:bg-gradient-to-tr hover:from-indigo-400 hover:to-indigo-500 hover:text-white  xl:text-sky-700"
            >
              <span className="text-sm xs:text-base">{el.name}</span>{" "}
              <span className="text-sm xs:text-base">({el.count})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreSubList;
