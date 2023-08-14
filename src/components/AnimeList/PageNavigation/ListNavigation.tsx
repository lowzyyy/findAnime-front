import type { IPagination, TNav } from "@helpers/types/types";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";
import type { Params } from "astro";
import React, { useContext } from "react";
import { AnimeListContext } from "../AnimeListContext/AnimeListContext";

type Props = {
  pagination: IPagination;
  params: Params;
  url: URL;
  navType: TNav;
};

// function ListNavigation({ pagination, params, url, navType }: Props) {
function ListNavigation() {
  const ctx = useContext(AnimeListContext)!;
  const currPage = ctx.pagination.current_page;
  let midLink: string;
  if (ctx.navType === "multiple" || ctx.navType === "genre")
    midLink =
      "/anime/genre/" +
      (ctx.navType === "multiple"
        ? ctx.navType
        : `${ctx.params.id}/${ctx.params.genreName}`);
  else if (ctx.navType === "category")
    midLink = `/topanime/${ctx.params.category}`;
  else midLink = `/anime/season`;

  return (
    <div className="mx-auto flex items-center justify-center gap-6">
      <button
        disabled={currPage < 2}
        className="disabled:text-gray-500"
        onClick={() => window.location.assign(`${midLink}/1${ctx.url.search}`)}
      >
        <ChevronDoubleLeftIcon className="h-10"></ChevronDoubleLeftIcon>
      </button>
      <button
        disabled={currPage < 2}
        className="disabled:text-gray-500"
        onClick={() =>
          window.location.assign(`${midLink}/${currPage - 1}${ctx.url.search}`)
        }
      >
        <ArrowSmallLeftIcon className="h-10"></ArrowSmallLeftIcon>
      </button>
      <span className="text-lg">{ctx.pagination.current_page}</span>
      <button
        disabled={currPage === ctx.pagination.last_visible_page}
        className="disabled:text-gray-500"
        onClick={() =>
          window.location.assign(
            `${midLink}/${ctx.pagination.current_page + 1}${ctx.url.search}`
          )
        }
      >
        <ArrowSmallRightIcon className="h-10"></ArrowSmallRightIcon>
      </button>
      <button
        disabled={currPage === ctx.pagination.last_visible_page}
        className="disabled:text-gray-500"
        onClick={() =>
          window.location.assign(
            `${midLink}/${ctx.pagination.last_visible_page}${ctx.url.search}`
          )
        }
      >
        <ChevronDoubleRightIcon className="h-10"></ChevronDoubleRightIcon>
      </button>
    </div>
  );
}

export default ListNavigation;
