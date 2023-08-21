import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

type Props = { urlOrigin: string };

function SearchBarMobile({ urlOrigin }: Props) {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="">
      <div
        className="fixed right-10 top-4"
        onClick={() => {
          if (showSearch) document.body.style.overflowY = "auto";
          else document.body.style.overflowY = "hidden";
          setShowSearch((state) => !state);
        }}
      >
        <MagnifyingGlassIcon className=" h-7 cursor-pointer    text-white"></MagnifyingGlassIcon>
      </div>
      {showSearch && (
        <div
          className={` fixed left-0 top-14 h-screen w-full  bg-black bg-opacity-30 backdrop-blur-md`}
        >
          <SearchBar urlOrigin={urlOrigin} />
        </div>
      )}
    </div>
  );
}

export default SearchBarMobile;
