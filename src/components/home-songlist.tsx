import Image from "next/image";
import { Song } from "./right-bar";

export type Props = {
  title: string;
  cover: string;
  artist: string;
  link: string;
  timestamp: Date;
};

export const HomeSonglist = ({
  Playlists,
  title,
  onClick,
  recentlyPlayed,
}: {
  Playlists: Props[];
  title: string;
  onClick:(song: Song) => void;
  recentlyPlayed: Song[];
}) => {

  const handleClick = (song: Song) => {
    onClick(song);
    recentlyPlayed.unshift(song);
  }

  return (
    <div className="flex flex-col w-[100%] items-start gap-5 mt-9">
      <h1 className="text-gray-300 text-2xl font-medium">{title}</h1>
      <div className="grid grid-cols-5 gap-3 w-[100%]">
        {Playlists.map((playlist, index) => (
          <button
            key={index}
            className="flex w-[100%] h-[15rem] flex-col items-start justify-start"
            onClick={() => handleClick(playlist)}
          >
            <Image
              width={300}
              height={300}
              quality={100}
              src={playlist.cover}
              alt={playlist.title}
              className=" rounded-sm"
            />
            <h1 className="text-gray-300 text-sm font-semibold mt-2">{playlist.title}</h1>
            <p className="text-gray-400 text-wrap max-w-[100%] mt-1 text-[11px]">{playlist.artist}</p>
          </button>
        ))}
      </div>
    </div>
  );
};