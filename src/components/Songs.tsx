"use client";

import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";

export type PlaylistProp = {
  title: string;
  artist: string;
  cover: string;
  timestamp: Date;
  link: string;
};

export default function Songs({
  playlists,
  setCurrentSong,
}: {
  playlists: PlaylistProp[];
  setCurrentSong: (song: PlaylistProp) => void;
}) {
  const [active, setactive] = useState(0);

  const handleClick = (index: number) => {
    setactive(index);
    setCurrentSong(playlists[index]);
  };

  return (
    <ul>
      {playlists.map((playlist, index) => (
        <li key={index}>
          <button
            className={`group flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-white/10 ${
              active === index ? "text-green-500" : "text-gray-300"
            }`}
            onClick={() => handleClick(index)}
          >
            <Image
              height={80}
              width={80}
              src={playlist.cover}
              alt={playlist.title}
              className="h-9 w-10 rounded-sm object-cover"
            />
            <div className="flex-1 overflow-hidden">
              <div
                className={`truncate text-xs font-medium ${
                  active === index ? "text-green-500" : "text-gray-300"
                }`}
              >
                {playlist.title}
              </div>
              <div
                className={`truncate text-[10px] text-gray-400 `}
              >
                {playlist.artist}
              </div>
            </div>
            <div className={`text-[10px] text-gray-400 `}>
              {format(new Date(playlist.timestamp), "m 'min ago'")}
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}
