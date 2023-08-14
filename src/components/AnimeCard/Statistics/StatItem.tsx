import React from "react";

type Props = {
  upperPart: string;
  lowerPart: string | null;
};

export default function StatItem({ upperPart, lowerPart }: Props) {
  if (!lowerPart) return null;
  return (
    <span className="flex flex-col items-center gap-3 border-none border-black p-1">
      <span className="text-xl font-medium">{upperPart}</span>
      <span className="text-lg ">{lowerPart}</span>
    </span>
  );
}
