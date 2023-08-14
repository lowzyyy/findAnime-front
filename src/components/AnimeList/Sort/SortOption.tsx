import type { TNav } from "@helpers/types/types";
import {
  ArrowLongDownIcon,
  ArrowLongUpIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/20/solid";
import type { Params } from "astro";
import React, { useContext, useRef, useState } from "react";
import { AnimeListContext } from "../AnimeListContext/AnimeListContext";

type Props = {
  url: URL;
  params: Params;
  navType: TNav;
};

// const SortOption = ({ url, params, navType }: Props) => {
const SortOption = () => {
  const ctx = useContext(AnimeListContext)!;
  let sort = ctx.url.searchParams.get("sort") ?? "desc";
  const [order, setOrder] = useState(
    ctx.url.searchParams.get("order") ?? "score"
  );
  const selectRef = useRef<HTMLSelectElement>(null);

  let midLink: string;
  if (ctx.navType === "multiple" || ctx.navType === "genre") {
    midLink =
      `/anime/genre/` +
      (ctx.navType === "multiple"
        ? ctx.navType
        : `${ctx.params.id}/${ctx.params.genreName}`);
  }

  const additionalGenres =
    ctx.navType === "multiple"
      ? "&genres=" + ctx.url.searchParams.get("genres")
      : "";
  // callbacks
  const onSelect = (e: any) => {
    setOrder(e.target.value);
    const link = `${ctx.url.origin}/${midLink}/1?sort=${sort}&order=${e.target.value}${additionalGenres}`;
    window.location.assign(link);
  };
  const onSort = () => {
    console.log(sort);
    sort = sort === "desc" ? "asc" : "desc";
    const link = `${
      ctx.url.origin
    }/anime/genre/${midLink}/1?sort=${sort}&order=${
      selectRef.current!!.value
    }${additionalGenres}`;
    window.location.assign(link);
  };

  return (
    <div className="mt-2 flex items-center justify-end ">
      <div className="flex items-center gap-1 rounded-md bg-slate-100 p-1">
        <select
          ref={selectRef}
          onChange={onSelect}
          className="rounded-sm bg-inherit px-1 text-center text-lg outline-none"
          name="Order"
          value={order}
        >
          <option value="score">Score</option>
          <option value="members">Members</option>
          <option value="rank">Rank</option>
          <option value="popularity">Popularity</option>
        </select>
        <span onClick={onSort} className="flex cursor-pointer ">
          {sort === "desc" ? (
            <BarsArrowDownIcon className="h-5 " />
          ) : (
            <BarsArrowUpIcon className="h-5" />
          )}
        </span>
      </div>
    </div>
  );
};

export default SortOption;
