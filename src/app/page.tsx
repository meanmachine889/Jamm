"use client";

import Header from "@/components/header";
import { LeftSidebar } from "@/components/left-sidebar";
import { MusicSidebar, Song } from "@/components/right-bar";
import Hero from "@/components/hero";
import { HomePlaylist } from "@/components/home-playlists";
import { useState } from "react";
import MusicPlayer from "@/components/musicPlayer";
import { HomeSonglist } from "@/components/home-songlist";
import { songs, playlist, recentlyPlayed } from "@/components/components";

export default function Home() {
  const [currentSong, setCurrentSong] = useState<Song>({
    title: "Starboy",
    artist: "The Weeknd",
    cover:
      "https://i.pinimg.com/736x/70/f9/be/70f9becbf32703530817456fcc088bb5.jpg",
    timestamp: new Date(Date.now() - 4 * 60 * 1000),
    link: "https://res.cloudinary.com/dnfv0h10u/video/upload/v1733979950/starboy_notzi2.mp3",
  });

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] bg-black items-start justify-start">
      <div className="flex w-[100%]">
        <LeftSidebar image={currentSong.cover} />
        <div className="flex overflow-y-scroll max-h-[85vh] bg-zinc-900 main-page py-3 items-center w-[100%] px-5 flex-col gap-3 min-h-[100%]">
          <Header />
          <Hero />
          <HomePlaylist title="Hello, Yash" Playlists={playlist} />
          <HomeSonglist title="New releases for you" Playlists={songs} onClick={setCurrentSong} recentlyPlayed={recentlyPlayed} />
        </div>
        <MusicSidebar setCurrentSong={setCurrentSong} recentlyPlayed={recentlyPlayed} />
      </div>
      <MusicPlayer link={currentSong.link} artist={currentSong.artist} title={currentSong.title} />
    </div>
  );
}
