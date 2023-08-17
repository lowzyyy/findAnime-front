import type { IAnime } from "@helpers/types/types";
import React from "react";
import InfoItem from "./InfoItem";
import { durationFormat } from "@helpers/globalHelpers";
import GenreLinks from "./GenreLinks";

type Props = { details: IAnime; url: URL };

function Information({ details, url }: Props) {
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
        <InfoItem>Duration</InfoItem>: {durationFormat(details.duration)}
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
        {<GenreLinks genre={details.demographics} url={url}></GenreLinks>}
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
  );
}

export default Information;
