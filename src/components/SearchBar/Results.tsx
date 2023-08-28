import { addUnderscore } from "@helpers/globalHelpers";
import type { IAnimeObj } from "@helpers/types/types";
import React from "react";

type Props = {
  data: IAnimeObj | undefined;
  isLoading: boolean;
  urlOrigin: string;
  error: any;
};

function Results({ data, isLoading, urlOrigin, error }: Props) {
  return (
    <div
      id="search-results"
      className="flex  max-h-[600px] w-full flex-col overflow-y-scroll bg-white sm:absolute sm:left-0   md:gap-1"
    >
      {!isLoading && data && data?.data.length > 0 && (
        <p className="bg-gray-300">Results</p>
      )}
      {!isLoading &&
        data &&
        data?.data.length > 0 &&
        data?.data.map((el, i) => (
          <a
            href={`${urlOrigin}/anime/${el.mal_id}/${addUnderscore(
              el.titles[0].title
            )}`}
            className=" flex gap-1 p-1  hover:bg-gray-200"
            key={i}
          >
            <div className=" min-w-[40px] max-w-[40px] transition-all sm:hover:max-w-[70px]">
              <img
                src={`${el.images.jpg.image_url}`}
                alt={`image of ${el.titles[0].title} anime`}
                className="object-cover object-center"
              />
            </div>
            <span>{el.titles[0].title}</span>
          </a>
        ))}
      {!isLoading && data?.data.length === 0 && (
        <p className="border-t border-black p-1">No results!</p>
      )}
      {error && <p className="border-t border-black p-1">Error!</p>}
    </div>
  );
}

export default Results;
