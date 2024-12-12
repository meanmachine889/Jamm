"use client";

import Header from "@/components/header";
import { LeftSidebar } from "@/components/left-sidebar";
import { MusicSidebar, Song } from "@/components/right-bar";
import Hero from "@/components/hero";
import { HomePlaylist } from "@/components/home-playlists";
import { useState } from "react";
import MusicPlayer from "@/components/musicPlayer";

const playlist = [
  {
    name: "We don't trust you",
    cover:
      "https://i.pinimg.com/736x/33/5f/b8/335fb8953c859a8dca9c75b809bc00db.jpg",
    description: "Future & Metro Boomin's latest album just for you",
  },
  {
    name: "Blond",
    cover:
      "https://i.pinimg.com/236x/d5/49/49/d54949f1c080a1b4c79b57884894e015.jpg",
    description: "Frank Ocean's new album",
  },
  {
    name: "Flower Boy",
    cover:
      "https://i.pinimg.com/736x/e5/3b/2a/e53b2aa902156191c38bdb24ee311466.jpg",
    description: "by Tyler, The Creator",
  },
  {
    name: "Trilogy",
    cover:
      "https://i.pinimg.com/736x/82/de/25/82de25b193a12fa7ac30385887d03b31.jpg",
    description: "by The Weeknd",
  },
  {
    name: "Syre",
    cover:
      "https://i.pinimg.com/736x/fb/9a/8b/fb9a8bc768fb5be8607889d292ee3d75.jpg",
    description: "by Syre",
  },
];

const songs = [
  {
    name: "JackBoys",
    cover:
      "https://i.pinimg.com/236x/3d/f7/86/3df7867ea16547f959efe5f65dc682a1.jpg",
    description: "Travis Scott",
  },
  {
    name: "First Class",
    cover:
      "https://i.pinimg.com/236x/91/3d/1f/913d1f77a75868ebffd8bff72b5ee88f.jpg",
    description: "Jack Harlow",
  },
  {
    name: "Undergroung Kings",
    cover:
      "https://i.pinimg.com/236x/3f/ec/4b/3fec4b0b3d88df2df6115731d668271a.jpg",
    description: "Drake",
  },
  {
    name: "Nectar",
    cover:
      "https://i.pinimg.com/236x/2e/01/d0/2e01d09c54b023eb1a278fad348b48ee.jpg",
    description: "Joji",
  },
  {
    name: "Sicko Mode",
    cover:
      "https://i.pinimg.com/736x/b4/c9/6a/b4c96a5a5ed59da455e03069ffb71904.jpg",
    description: "Travis Scott ft. Drake",
  },
];

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
          <HomePlaylist title="New releases for you" Playlists={songs} />
        </div>
        <MusicSidebar setCurrentSong={setCurrentSong} />
      </div>
      <MusicPlayer link={currentSong.link} artist={currentSong.artist} title={currentSong.title} />
    </div>
  );
}
