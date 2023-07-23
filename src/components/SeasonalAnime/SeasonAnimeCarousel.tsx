import React, { useEffect, useRef, useState } from "react";
import type { IAnime } from "../../helpers/types/types";
import SeasonAnimeItem from "./SeasonAnimeItem";
import CarouselNavigation from "./CarouselNavigation";

const getSeasonNowName = () => {
  const month = new Date().getMonth() + 1;
  if (month <= 3) return "Winter";
  if (month <= 6) return "Spring";
  if (month <= 9) return "Summer";
  return "Fall";
};

function SeasonAnimeCarousel({ seasonalAnime }: { seasonalAnime: IAnime[] }) {
  const seasonName = getSeasonNowName();
  const carouselRef = useRef<HTMLUListElement>(null);
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    carouselRef.current!.scrollTo({ left: 0, behavior: "instant" });
  }, []);

  return (
    <div
      onMouseOver={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
      className="relative mt-6 border-none border-red-500  "
    >
      <p className="flex items-center justify-between  text-slate-800">
        <span className="flex flex-col font-medium xs:flex-row xs:items-center xs:gap-2">
          <span className="text-xl  md:text-3xl">
            {seasonName} anime {new Date().getFullYear()}
          </span>
          <span className="text-sm xs:text-base"> (by members)</span>
        </span>
        <span className="self-end text-base text-blue-600 md:text-xl">
          <a href="/anime/season">View more</a>
        </span>
      </p>
      <CarouselNavigation show={showNav} carouselRef={carouselRef}></CarouselNavigation>
      <ul
        ref={carouselRef}
        className="flex items-center gap-3 overflow-x-scroll scroll-smooth py-3 "
      >
        {seasonalAnime.map((anime, index) => (
          <SeasonAnimeItem animeData={anime} key={index}></SeasonAnimeItem>
        ))}
      </ul>
    </div>
  );
}

export default SeasonAnimeCarousel;
