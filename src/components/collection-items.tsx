import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type PlaylistProp = {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export default function CollectionList({
  playlists,
}: {
  playlists: PlaylistProp[];
}) {
  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.title}>
          <button className="group flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-white/10">
            <playlist.icon className="h-4 w-4 rounded-md object-cover" />
            <div className="flex-1 overflow-hidden">
              <div className="truncate text-xs text-gray-300 font-medium">
                {playlist.title}
              </div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}