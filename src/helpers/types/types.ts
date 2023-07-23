export interface IGenre {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

export interface IGenres {
  genres: IGenre[];
  explicit_genres: IGenre[];
  themes: IGenre[];
  demographics: IGenre[];
}

interface IImage {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
}

type TDateProp = {
  day: number | null;
  month: number | null;
  year: number | null;
};

export interface IAnime {
  mal_id: number;
  url: string;
  images: { jpg: IImage; webp: IImage };
  titles: { type: string; title: string }[];
  type: "TV" | "OVA" | "Movie" | "Special" | "ONA" | "Music" | null;
  episodes: number;
  status: "Finished Airing" | "Currently Airing" | "Not yet aired";
  airing: boolean;
  aired: {
    from: string; //Date ISO8601
    to: string; //Date ISO8601
    prop: { from: TDateProp; to: TDateProp; string: string };
  };
  duration: string;
  rating:
    | "G - All Ages"
    | "PG - Children"
    | "PG-13 - Teens 13 or older"
    | "R - 17+ (violence & profanity)"
    | "R+ - Mild Nudity"
    | "Rx - Hentai"
    | null;
  score: number;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  season: "summer" | "winter" | "spring" | "fall" | null;
  year: number | null;
  studios: { mal_id: number; name: string; url: string; type: string };
  genres: (Omit<IGenre, "count"> & { type: string })[];
  explicit_genres: (Omit<IGenre, "count"> & { type: string })[];
  themes: (Omit<IGenre, "count"> & { type: string })[];
  demographics: (Omit<IGenre, "count"> & { type: string })[];
}

export interface IPagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface IAnimeObj {
  pagination?: IPagination;
  data: IAnime[];
}

export interface ITopAnime {
  topAiring: IAnimeObj;
  topUpcoming: IAnimeObj;
  mostPopular: IAnimeObj;
}
