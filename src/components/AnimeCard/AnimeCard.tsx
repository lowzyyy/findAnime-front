import React from "react";
import { addUnderscore, durationFormat } from "@helpers/globalHelpers";
import type { CharacterInfo, IAnime } from "@helpers/types/types";
import Synopsis from "./Synopsis/Synopsis";
import GenreLinks from "./Information/GenreLinks";
import InfoItem from "./Information/InfoItem";
import Statistics from "./Statistics/Statistics";
import CharactersList from "./Characters/CharactersList";

type Props = {
  name: string;
  alternativeName: string | undefined;
  details: IAnime;
  characters: CharacterInfo[];
  url: URL;
};

function AnimeCard({ name, alternativeName, details, characters, url }: Props) {
  const aired = details.aired.from
    ? new Date(details.aired.from).toLocaleDateString("us-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
      " to " +
      `${
        details.aired.to
          ? new Date(details.aired.to).toLocaleDateString("us-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "?"
      }`
    : "Not available";

  const studios =
    details.studios.length > 0
      ? details.studios.map((el) => el.name).join(", ")
      : "None found";

  const producers =
    details.producers.length > 0
      ? details.producers.map((el) => el.name).join(", ")
      : "None found";

  const licensors =
    details.licensors.length > 0
      ? details.licensors.map((el) => el.name).join(", ")
      : "None found";
  return (
    <div>
      <header className="mb-2 flex flex-col gap-2 border border-b-black bg-indigo-50 p-2 ">
        <h1 className="text-xl">{name}</h1>
        {name !== alternativeName && alternativeName && (
          <h3 className="text-base">{alternativeName}</h3>
        )}
      </header>
      <section className="flex w-full gap-3">
        <div className="flex w-[290px] flex-col">
          <div className="mb-2 max-h-[400px]  shrink-0 overflow-hidden">
            <img
              className=" object-contain"
              src={`${details.images.webp.large_image_url}`}
              alt={`${name} anime image`}
            />
          </div>
          <div>
            <h5 className="mb-2 border-b border-slate-500 p-1">Information</h5>
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-gray-700">
                <InfoItem>Type</InfoItem>: {details.type}
              </span>
              <span className="text-gray-700">
                <InfoItem>Status</InfoItem>: {details.status}
              </span>
              {details.broadcast.string && (
                <span className="text-gray-700">
                  <InfoItem>Broadcast</InfoItem>: {details.broadcast.string}
                </span>
              )}
              <span className="text-gray-700">
                <InfoItem>Episodes</InfoItem>: {details.episodes ?? "?"}
              </span>
              <span className="text-gray-700">
                <InfoItem>Duration</InfoItem>:{" "}
                {durationFormat(details.duration)}
              </span>
              <span className="text-gray-700">
                <InfoItem>Aired</InfoItem>: {aired}
              </span>
              <span className="text-gray-700">
                <InfoItem>Source</InfoItem>: {details.source ?? "Unknown"}
              </span>
              <span className="text-gray-700">
                <InfoItem>Studios</InfoItem>: {studios}
              </span>
              <span className="text-gray-700">
                <InfoItem>Genre</InfoItem>:{" "}
                {
                  <GenreLinks
                    genre={[...details.genres, ...details.explicit_genres]}
                    url={url}
                  ></GenreLinks>
                }
              </span>
              <span className="text-gray-700">
                <InfoItem>Theme</InfoItem>:{" "}
                {<GenreLinks genre={details.themes} url={url}></GenreLinks>}
              </span>
              <span className="text-gray-700">
                <InfoItem>Demographics</InfoItem>:{" "}
                {
                  <GenreLinks
                    genre={details.demographics}
                    url={url}
                  ></GenreLinks>
                }
              </span>
              <span className="text-gray-700">
                <InfoItem>Producers</InfoItem>: {producers}
              </span>
              <span className="text-gray-700">
                <InfoItem>Licensors</InfoItem>: {licensors}
              </span>

              <span className="text-gray-700">
                <InfoItem>Rating</InfoItem>: {details.rating}
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <Statistics details={details}></Statistics>
          <Synopsis
            background={details.background}
            synopsis={details.synopsis}
          ></Synopsis>
          <CharactersList
            name={addUnderscore(details.titles[0].title)}
            id={details.mal_id}
            characters={characters}
          />
        </div>
      </section>
    </div>
  );
}

export default AnimeCard;
