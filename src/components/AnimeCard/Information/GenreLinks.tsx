import { addUnderscore } from "@helpers/globalHelpers";
import type { OmittedGenre } from "@helpers/types/types";
import React from "react";

type Props = { url: URL; genre: OmittedGenre[] };

function GenreLinks({ url, genre }: Props) {
  if (genre.length === 0) return <span>{"-"}</span>;
  return genre.map((el, i, arr) => {
    return (
      <a
        className="text-blue-900 hover:text-blue-700 hover:underline "
        key={i}
        href={`${url.origin}/anime/genre/${el.mal_id}/${addUnderscore(
          el.name
        )}`}
      >
        {el.name}
        {i !== arr.length - 1 ? ", " : ""}
      </a>
    );
  });
}

export default GenreLinks;
