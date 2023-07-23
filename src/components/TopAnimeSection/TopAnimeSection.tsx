import React, { ReactNode } from "react";

function TopAnimeSection({ children }: { children: ReactNode }) {
  return (
    <div className="mb-10 mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-20">
      {children}
    </div>
  );
}

export default TopAnimeSection;
