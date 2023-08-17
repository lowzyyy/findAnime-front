import type { CharacterInfo } from "@helpers/types/types";
import React from "react";

type Props = { charInfo: CharacterInfo };

function CharacterItem({ charInfo }: Props) {
  let VA = charInfo.voice_actors.find((el) => el.language === "Japanese");
  if (!VA) VA = charInfo.voice_actors.find((el) => el.language === "English");

  return (
    <div className="flex flex-col border-none shadow-[0px_0px_2px_0px_rgba(0,0,0,0.55)] sm:justify-between lg:flex-row lg:shadow-[0px_0px_2px_0px_rgba(0,0,0,0.35)] ">
      <div className="flex gap-1">
        <div className="h-[75px] w-[50px] overflow-hidden">
          <img
            className="object-contain"
            src={`${charInfo.character.images.webp.image_url}`}
            alt={`${charInfo.character.name} image`}
          />
        </div>
        <div className="flex flex-col justify-between sm:gap-2">
          <a
            href={`https://myanimelist.net/character/${charInfo.character.mal_id}/${charInfo.character.name}`}
            className="text-sm text-blue-900 hover:text-blue-700 hover:underline"
          >
            {charInfo.character.name}
          </a>
          <span className="text-sm sm:text-base">{charInfo.role}</span>
        </div>
      </div>
      {VA && (
        <div className="flex gap-1 lg:flex-row-reverse">
          <div className="h-[75px] w-[50px] overflow-hidden">
            <img
              className="object-contain"
              src={`${VA.person.images.jpg.image_url}`}
              alt={`${VA.person.name} image`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={`https://myanimelist.net/people/${VA.person.mal_id}/${VA.person.name}`}
              className="text-sm text-blue-900 hover:text-blue-700 hover:underline"
            >
              {VA.person.name}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterItem;
