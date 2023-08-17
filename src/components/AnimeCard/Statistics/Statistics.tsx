import React from "react";
import StatItem from "./StatItem";
import type { IAnime } from "@helpers/types/types";
import { formatNumbers } from "@helpers/globalHelpers";

type Props = { details: IAnime };

function Statistics({ details }: Props) {
  const members = formatNumbers(details.members);
  const favourites = formatNumbers(details.favorites);
  const scoredby = formatNumbers(details.scored_by);
  return (
    <div className="grid w-full grid-cols-2 rounded-sm bg-slate-50 shadow-sm shadow-gray-400 md:flex md:justify-between">
      <StatItem
        upperPart={"Score"}
        lowerPart={"" + (details.score ?? "-")}
      ></StatItem>
      <StatItem
        upperPart={"Ranked"}
        lowerPart={details.rank ? "#" + details.rank : "-"}
      ></StatItem>
      <StatItem
        upperPart={"Popularity"}
        lowerPart={"#" + details.popularity}
      ></StatItem>
      <StatItem upperPart={"Members"} lowerPart={members}></StatItem>
      <StatItem upperPart={"Favourites"} lowerPart={favourites}></StatItem>
      <StatItem upperPart={"Users"} lowerPart={scoredby}></StatItem>
    </div>
  );
}

export default Statistics;
