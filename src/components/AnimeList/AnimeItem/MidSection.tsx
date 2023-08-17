import { addUnderscore } from "@helpers/globalHelpers";
import type { IAnime } from "@helpers/types/types";
import React, { useEffect, useState } from "react";

type Props = {
  details: IAnime;
  url: URL;
};

const synopsisLength = 260;

export const ShowMore = ({
  synopsis,
  parentRef,
  shoulScrollIntoView,
}: {
  synopsis: string | null;
  parentRef:
    | React.RefObject<HTMLButtonElement>
    | React.RefObject<HTMLDivElement>
    | undefined;
  shoulScrollIntoView: boolean;
}) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {showAll
        ? synopsis
        : (synopsis?.slice(0, synopsisLength) ?? "No data.") +
          `${synopsis && synopsis?.length! > synopsisLength ? "..." : ""}`}
      {showAll ? (
        <button
          onClick={() => {
            if (parentRef && shoulScrollIntoView) {
              parentRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
              setTimeout(() => setShowAll(!showAll), 250);
              return;
            }
            setShowAll(!showAll);
          }}
          className="text-blue-700"
        >
          Show less
        </button>
      ) : (
        synopsis?.length! > synopsisLength && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-700"
          >
            Show more
          </button>
        )
      )}
    </>
  );
};

function MidSection({ details, url }: Props) {
  return (
    <div className=" flex h-[242px] gap-4">
      <a
        href={`${url.origin}/anime/${details.mal_id}/${addUnderscore(
          details.titles[0].title
        )}`}
        className="h-full min-w-[150px] max-w-[150px] cursor-pointer  overflow-y-hidden xs:min-w-[175px] xs:max-w-[175px] "
      >
        <img
          className="object-cover "
          src={`${details.images.webp.large_image_url}`}
          alt=""
        />
      </a>
      <div className=" flex h-full flex-col gap-1 overflow-y-auto p-1 text-sm ">
        {details.synopsis}
      </div>
    </div>
  );
}

export default MidSection;
