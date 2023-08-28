import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import useHideGlobal from "./useHideGlobal";

type Props = { urlOrigin: string };

function SearchBarMobile({ urlOrigin }: Props) {
  const [showSearch, setShowSearch] = useState(false);
  const ref = useHideGlobal(setShowSearch);
  return (
    <div ref={ref} className="">
      <div
        className={`fixed right-[4%] top-4 ${showSearch ? "hidden" : "block"}`}
      >
        <MagnifyingGlassIcon className=" h-7 cursor-pointer    text-white"></MagnifyingGlassIcon>
      </div>

      <div
        className={` fixed left-0 top-14 h-screen w-full  bg-black bg-opacity-30 backdrop-blur-md ${
          showSearch ? "block" : "hidden"
        }`}
      >
        <SearchBar urlOrigin={urlOrigin} />
      </div>
    </div>
  );
}

export default SearchBarMobile;
