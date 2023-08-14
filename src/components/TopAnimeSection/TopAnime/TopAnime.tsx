import React from "react";
import type { IAnime, IAnimeObj } from "../../../helpers/types/types";
import { StarIcon, UserIcon } from "@heroicons/react/20/solid";
import { formatNumbers } from "../../../helpers/globalHelpers";

function TopAnime({ topAnime, title }: { topAnime: IAnime[]; title: string }) {
  const linkPart = title.toLowerCase().split(" ").join("-");
  return (
    <div className="rounded-sm border-l-[1px]  border-slate-600 ">
      <div className="flex  w-full items-center justify-between  bg-indigo-300 p-2 xs:rounded-e-md">
        <span className="text-lg">{title}</span>
        <a
          className="text-blue-700 hover:underline"
          href={`/topanime/${linkPart}`}
        >
          More
        </a>
      </div>

      <div className="mt-2 flex flex-col gap-1">
        {topAnime.map((el, index) => {
          return (
            <div key={index} className="flex gap-2">
              <p className="w-6 text-center">{index + 1}</p>
              <div
                style={{
                  backgroundImage: `url(${el.images.webp.image_url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className={`h-20 w-16 shrink-0 transition-all hover:scale-105`}
              >
                <a
                  href={`anime/${el.mal_id}/${el.titles[0].title.replaceAll(
                    " ",
                    "_"
                  )}`}
                  className="block h-full"
                ></a>
              </div>
              <div className="flex w-full flex-col justify-between">
                <a
                  href={`anime/${el.mal_id}/${el.titles[0].title.replaceAll(
                    " ",
                    "_"
                  )}`}
                  className=" leading-5 text-blue-950 hover:text-blue-700 hover:underline "
                >
                  {el.titles[0].title}
                </a>
                <div className="flex justify-between">
                  {el.score && (
                    <div title="Score" className="flex">
                      <StarIcon className="h-5 text-yellow-500" />
                      {el.score}
                    </div>
                  )}
                  <div title="Members" className="flex">
                    {formatNumbers(el.members)}
                    <UserIcon className="h-5 text-fuchsia-300" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopAnime;
