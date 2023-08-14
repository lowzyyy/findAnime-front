import { addUnderscore } from "@helpers/globalHelpers";
import type { IAnime } from "@helpers/types/types";
import React, { useRef, useState } from "react";
import MidSection from "./MidSection";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

// TODO: REMOVE PRIORITY AND POPULARITY paragraph WHEN THEY FIX API
function AnimeItem({ details, url }: { details: IAnime; url: URL }) {
  return (
    <div className="flex flex-col justify-between  px-2 shadow-md shadow-slate-300">
      <TopSection details={details} url={url}></TopSection>
      <MidSection details={details} url={url}></MidSection>
      <BottomSection details={details}></BottomSection>
    </div>
  );
}

export default AnimeItem;
