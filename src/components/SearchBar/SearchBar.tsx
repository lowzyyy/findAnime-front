import axios from "axios";
import React from "react";
import useSWR from "swr";
import { useState, useRef, useEffect } from "react";
import type { IAnimeObj } from "@helpers/types/types";
import { addUnderscore } from "@helpers/globalHelpers";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Results from "./Results";
type Props = {
  urlOrigin: string;
};

const fetcher = async (url: string) => {
  try {
    const resposne = await axios.get(url);
    return resposne.data;
  } catch (error) {
    throw error;
  }
};

const API = "https://api.jikan.moe/v4/anime";

function SearchBar({ urlOrigin }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [timer, setTimer] = useState(0);
  const [showSearch, setShowSearch] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const { data, isLoading, error } = useSWR<IAnimeObj>(
    searchTerm !== "" ? API + `?q=${searchTerm}` : null,
    fetcher
  );

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = "";
  }, []);
  const onChangeSearch = (e: any) => {
    if (e.target.value !== "") {
      setShowSearch(true);
      clearTimeout(timer);
      setTimer(setTimeout(() => setSearchTerm(e.target.value), 500));
    } else setSearchTerm("");
  };

  return (
    <div className="relative z-[100]">
      <div className="relative flex items-center">
        <input
          onChange={onChangeSearch}
          ref={inputRef}
          type="text"
          placeholder="Search anime name"
          className=" w-full rounded-b-sm p-1  shadow-sm shadow-gray-300 outline-none sm:w-96 sm:pr-7"
        />
        <MagnifyingGlassIcon
          onClick={() => setShowSearch((state) => !state)}
          className="absolute right-0 hidden h-7 cursor-pointer   self-center text-black sm:block"
        ></MagnifyingGlassIcon>
      </div>
      {showSearch && (
        <div className="hidden sm:block">
          <Results
            data={data}
            isLoading={isLoading}
            error={error}
            urlOrigin={urlOrigin}
          ></Results>
        </div>
      )}

      <div className="sm:hidden">
        <Results
          data={data}
          isLoading={isLoading}
          error={error}
          urlOrigin={urlOrigin}
        ></Results>
      </div>
    </div>
  );
}

export default SearchBar;
