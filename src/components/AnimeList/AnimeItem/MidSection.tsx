import { addUnderscore } from "@helpers/globalHelpers";
import type { IAnime } from "@helpers/types/types";
import React, { useState } from "react";

type Props = { details: IAnime; url: URL };

const synopsisLength = 260;

function MidSection({ details, url }: Props) {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className=" flex gap-4 xl:h-[242px]">
      <a
        href={`${url.origin}/anime/${details.mal_id}/${addUnderscore(
          details.titles[0].title
        )}`}
        className="h-full min-w-[175px]  max-w-[175px] cursor-pointer overflow-y-hidden "
      >
        <img
          className="object-cover "
          src={`${details.images.webp.large_image_url}`}
          alt=""
        />
      </a>
      <div className="flex flex-col gap-1 overflow-y-auto p-1 text-sm ">
        {showAll
          ? details.synopsis
          : details.synopsis?.slice(0, synopsisLength) ??
            "No data." +
              `${
                details.synopsis && details.synopsis?.length! > synopsisLength
                  ? "..."
                  : ""
              }`}
        {showAll ? (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-700"
          >
            Show less
          </button>
        ) : (
          details.synopsis?.length! > synopsisLength && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-blue-700"
            >
              Show more
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default MidSection;
