import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import React from "react";

function CarouselNavigation({
  carouselRef,
  show,
}: {
  carouselRef: React.RefObject<HTMLUListElement>;
  show: boolean;
}) {
  return (
    <>
      <div
        className={`absolute -left-1 top-1/2 z-50  hidden translate-y-[-40%]  rounded-s-md bg-blue-400 opacity-80 ${
          show ? "md:flex md:flex-col" : "md:hidden"
        }`}
      >
        <button
          className="border-b border-black"
          onClick={() => (carouselRef.current!.scrollLeft += 99999)}
        >
          <ChevronDoubleRightIcon className="h-14 w-7"></ChevronDoubleRightIcon>
        </button>
        <button
          className=""
          onClick={() => (carouselRef.current!.scrollLeft -= 200)}
        >
          <ChevronLeftIcon className="h-14 w-7"></ChevronLeftIcon>
        </button>
      </div>
      <div
        className={`absolute -right-1 top-1/2 z-50 hidden translate-y-[-40%] rounded-e-md bg-blue-400 opacity-90   ${
          show ? "md:flex md:flex-col" : "md:hidden"
        }`}
      >
        <button
          className="border-b border-black"
          onClick={() => (carouselRef.current!.scrollLeft = 0)}
        >
          <ChevronDoubleLeftIcon className="h-14 w-7"></ChevronDoubleLeftIcon>
        </button>
        <button
          className=""
          onClick={() => (carouselRef.current!.scrollLeft += 200)}
        >
          <ChevronRightIcon className="h-14 w-7"></ChevronRightIcon>
        </button>
      </div>
    </>
  );
}

export default CarouselNavigation;
