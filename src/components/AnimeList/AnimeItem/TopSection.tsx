import { addUnderscore } from "@helpers/globalHelpers";
import type { IAnime } from "@helpers/types/types";
import React, { useRef, useState } from "react";

type Props = { details: IAnime; url: URL };

function TopSection({ details, url }: Props) {
  const genreRef = useRef<HTMLDivElement>(null);
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  return (
    <div className="min-h-[128px] ">
      <a
        href={`${url.origin}/anime/${details.mal_id}/${addUnderscore(
          details.titles[0].title
        )}`}
        className="mb-1 flex min-h-[50px] items-center justify-center border-b border-slate-500 bg-gray-100 pb-1  text-lg leading-6 "
      >
        {details.titles[0].title}
      </a>
      <div className=" mb-1 flex gap-2 text-sm">
        <span>Genre:</span>
        <div
          ref={genreRef}
          onMouseMove={(e: any) => {
            if (!mouseDown) return;
            const scroll = e.pageX - startX;
            genreRef.current!!.scrollLeft += -scroll;
          }}
          onMouseDown={(e: any) => {
            setMouseDown(true);
            setStartX(e.pageX);
          }}
          onMouseUp={() => {
            setMouseDown(false);
          }}
          className="genresAnimeItem flex gap-2 overflow-x-auto whitespace-nowrap text-xs "
        >
          {details.genres.map((el, i) => (
            <a
              key={i}
              href={`${url.origin}/anime/genre/${el.mal_id}/${addUnderscore(
                el.name
              )}`}
              className="cursor-pointer rounded-md bg-[#2cb3ac50] p-0.5"
            >
              {el.name}
            </a>
          ))}
          {details.explicit_genres.map((el, i) => (
            <a
              key={i}
              href={`${url.origin}/anime/genre/${el.mal_id}/${addUnderscore(
                el.name
              )}`}
              className="cursor-pointer rounded-md bg-[#2cb3ac50] p-0.5 "
            >
              {el.name}
            </a>
          ))}
        </div>
      </div>
      {
        <div className="mb-1 flex gap-2 text-sm">
          <span>Themes:</span>
          {details.themes.length > 0
            ? details.themes.map((el, i) => (
                <a
                  key={i}
                  href={`${url.origin}/anime/genre/${el.mal_id}/${addUnderscore(
                    el.name
                  )}`}
                  className=" cursor-pointer rounded-md bg-[#2081ff3d] p-0.5 text-xs"
                >
                  {el.name}
                </a>
              ))
            : "-"}
        </div>
      }
      {
        <div className="flex gap-2 text-sm">
          <span>Demographics:</span>
          {details.demographics.length > 0
            ? details.demographics.map((el, i) => (
                <a
                  key={i}
                  href={`/anime/genre/${el.mal_id}/${el.name}`}
                  className=" rounded-md bg-orange-200 p-0.5 text-xs"
                >
                  {el.name}
                </a>
              ))
            : "-"}
        </div>
      }
    </div>
  );
}

export default TopSection;
