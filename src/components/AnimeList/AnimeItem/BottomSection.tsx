import { durationFormat, formatNumbers } from "@helpers/globalHelpers";
import type { IAnime } from "@helpers/types/types";
import { ClockIcon, StarIcon, UserIcon } from "@heroicons/react/20/solid";
import React from "react";

type Props = { details: IAnime };

const BottomSection = ({ details }: Props) => {
  const members = formatNumbers(details.members);
  const duration = durationFormat(details.duration);
  return (
    <div className="flex items-center justify-between bg-gray-100 text-sm">
      <span className="flex items-center gap-4">
        <span title="Score" className="flex-shrink-1 flex text-base ">
          {<StarIcon className="h-5 text-orange-300" />}
          {details.score ?? "?"}
        </span>
        <span title="Members" className="flex items-center ">
          {<UserIcon className="h-5 text-purple-300" />}
          {members}
        </span>
      </span>
      <span className="flex gap-2">
        <span>{details.type}</span>
        <span title="Number of episodes">{details.episodes ?? "?"} ep</span>
        <span title="Episode duration" className="flex items-center">
          {<ClockIcon className="h-5 text-slate-400"></ClockIcon>} {duration}
        </span>
      </span>
    </div>
  );
};

export default BottomSection;
