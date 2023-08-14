import React, { Children, ReactNode } from "react";

type Props = { children: ReactNode };

const GenreNameHeader = ({ children }: Props) => {
  return (
    <p className="mb-4 bg-sky-100 py-2 text-center text-xl md:text-2xl lg:text-3xl">
      {children}
    </p>
  );
};

export default GenreNameHeader;
