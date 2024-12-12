import Image from "next/image";

export type Props = {
  name: string;
  cover: string;
  description: string;
};

export const HomePlaylist = ({
  Playlists,
  title,
}: {
  Playlists: Props[];
  title: string;
}) => {
  return (
    <div className="flex flex-col w-[100%] items-start gap-5 mt-9">
      <h1 className="text-gray-300 text-2xl font-medium">{title}</h1>
      <div className="grid grid-cols-5 gap-3 w-[100%]">
        {Playlists.map((playlist, index) => (
          <div
            key={index}
            className="flex w-[100%] h-[15rem] flex-col items-start justify-start"
          >
            <Image
              width={300}
              height={300}
              quality={100}
              src={playlist.cover}
              alt={playlist.name}
              className=" rounded-sm"
            />
            <h1 className="text-gray-300 text-sm font-semibold mt-2">{playlist.name}</h1>
            <p className="text-gray-400 text-wrap max-w-[100%] mt-1 text-[11px]">{playlist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
