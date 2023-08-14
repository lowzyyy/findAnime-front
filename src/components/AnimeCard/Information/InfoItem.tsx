import React, { ReactNode } from "react";

type Props = { children: ReactNode };

function InfoItem({ children }: Props) {
  return <span className="font-medium text-black">{children}</span>;
}

export default InfoItem;
