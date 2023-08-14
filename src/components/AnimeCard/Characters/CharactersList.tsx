import type { CharacterInfo } from "@helpers/types/types";
import React from "react";
import CharacterItem from "./CharacterItem";

type Props = { characters: CharacterInfo[]; id: number; name: string };

function CharactersList({ characters, id, name }: Props) {
  return (
    <div>
      <div className="my-2 flex justify-between">
        <span>Characters</span>
        <a
          className="text-blue-900 hover:text-blue-700 hover:underline"
          href={`https://myanimelist.net/anime/${id}/${name}/characters`}
        >
          More info
        </a>
      </div>
      {characters.length !== 0 ? (
        <div className="mb-10 grid h-[400px] auto-rows-min grid-cols-2 gap-x-6 gap-y-2 overflow-y-auto p-1">
          {characters.map((el, i) => (
            <CharacterItem key={i} charInfo={el}></CharacterItem>
          ))}
        </div>
      ) : (
        <div>No staff for this anime have been added to this title.</div>
      )}
    </div>
  );
}

export default CharactersList;
