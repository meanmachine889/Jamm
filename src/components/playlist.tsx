import Image from "next/image";

export type PlaylistProp = {
  title: string;
  songCount: number;
  duration: string;
  cover: string;
};

export default function Playlist({ playlists }: { playlists: PlaylistProp[] }) {
  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.title}>
          <button className="group flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-white/10">
            <Image
              height={80}
              width={80}
              src={playlist.cover}
              alt={playlist.title}
              className="h-9 w-10 rounded-sm object-cover"
            />
            <div className="flex-1 overflow-hidden">
              <div className="truncate text-xs text-gray-300 font-medium">
                {playlist.title}
              </div>
              <div className="truncate text-[10px] text-gray-400">
                {<p>{playlist.songCount} songs</p>}
              </div>
            </div>
            <div className="text-[10px] text-gray-400">{playlist.duration}</div>
          </button>
        </li>
      ))}
    </ul>
  );
}
