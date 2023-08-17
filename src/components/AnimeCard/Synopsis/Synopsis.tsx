import { ShowMore } from "@components/AnimeList/AnimeItem/MidSection";
import React, { useRef } from "react";

type Props = {
  synopsis: string | null;
  background: string | null;
  shouldScrollIntoView: boolean;
};

function Synopsis({ synopsis, background, shouldScrollIntoView }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={parentRef} className=" flex flex-col gap-4 ">
      <div className="rounded-sm bg-slate-50 shadow-sm shadow-gray-300">
        <h3 className="border-b border-slate-400 p-1 text-lg font-medium">
          Synopsis
        </h3>
        <div className="flex flex-col p-2 leading-7 text-slate-800">
          <ShowMore
            synopsis={synopsis ?? "No synopsis data."}
            parentRef={parentRef}
            shoulScrollIntoView={shouldScrollIntoView}
          ></ShowMore>
        </div>
      </div>
      <div className="rounded-sm bg-slate-50 shadow-sm shadow-gray-300">
        <h3 className="border-b-[0.5px] border-slate-400 p-1 text-lg font-medium">
          Background
        </h3>
        <p className="p-2 text-slate-800">
          {background ?? "No background data."}
        </p>
      </div>
    </div>
  );
}

export default Synopsis;
