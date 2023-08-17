import { addUnderscore } from "@helpers/globalHelpers";
import type { IGenre } from "@helpers/types/types";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

type Props = {
  genre: IGenre;
  multiple: boolean;
  addSelected: React.Dispatch<React.SetStateAction<Set<number>>>;
};

const SubListItem = ({ genre, multiple, addSelected }: Props) => {
  const [selected, setSelected] = useState(false);
  const onGenre = (e: any) => {
    if (multiple) e.preventDefault();
    else return;
    setSelected(!selected);
    addSelected((alreadySelected) => {
      if (!selected) return new Set([...alreadySelected, genre.mal_id]);
      else {
        alreadySelected.delete(genre.mal_id);
        return new Set([...alreadySelected]);
      }
    });
  };
  useEffect(() => {
    if (!multiple) setSelected(false);
  }, [multiple]);
  return (
    <li className="flex items-center  md:gap-2">
      <a
        onClick={onGenre}
        href={`anime/genre/${genre.mal_id}/${addUnderscore(genre.name)}`}
        className=" cursor-pointer rounded-md p-1 text-blue-600 hover:bg-gradient-to-tr hover:to-indigo-500 hover:text-white xl:text-sky-700  xl:hover:from-indigo-400"
      >
        <span className="text-sm xs:text-base">{genre.name}</span>{" "}
        <span className="text-xs xs:text-base ">({genre.count})</span>
      </a>
      {selected && multiple && (
        <CheckCircleIcon className="h-3 md:h-5"></CheckCircleIcon>
      )}
    </li>
  );
};

export default SubListItem;
