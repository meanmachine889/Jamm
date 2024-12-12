"use client";

import * as React from "react";
import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Playlist from "./playlist";
import Songs from "./Songs";

export interface Song {
  title: string;
  artist: string;
  cover: string;
  timestamp: Date;
  link: string;
}

export interface Playlist {
  title: string;
  songCount: number;
  duration: string;
  cover: string;
}

const playlists: Playlist[] = [
  {
    title: "land of rising sun",
    songCount: 38,
    duration: "2hr 43 min",
    cover:
      "https://i.pinimg.com/736x/b0/e8/1f/b0e81f04fb5ed9278b156bc75c4029a4.jpg",
  },
  {
    title: "burning memories",
    songCount: 21,
    duration: "1hr 4 min",
    cover:
      "https://i.pinimg.com/736x/c2/0a/d1/c20ad1c2ab33842cab4675ab6ed36062.jpg",
  },
  {
    title: "dream 127 U",
    songCount: 35,
    duration: "1hr 56 min",
    cover:
      "https://i.pinimg.com/736x/a8/2f/29/a82f29bb17fddcd6cee6e03a2d9fb74d.jpg",
  },
  {
    title: "underrated",
    songCount: 18,
    duration: "51 min",
    cover:
      "https://i.pinimg.com/736x/7e/89/cd/7e89cd95aa2558b0c071484bb103bf84.jpg",
  },
];


export type PlaylistProp = {
  setCurrentSong: (song: Song) => void;
  recentlyPlayed: Song[];
}

export function MusicSidebar({ setCurrentSong, recentlyPlayed }: PlaylistProp) {

  return (
    <div className="flex max-h-[85vh] main-page overflow-y-auto h-[85vh] w-[30%] flex-col bg-black text-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Image
            height={80}
            width={80}
            src="https://i.pinimg.com/736x/f4/30/c0/f430c0ab256c125edd39ba286db3c72c.jpg"
            alt="Profile"
            className="h-12 w-12 rounded-full"
          />
          <span className="font-semibold text-sm">Timothy Luca</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <Bell className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto mt-5 px-2">
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center justify-between px-2">
              <h2 className="text-sm text-gray-200 font-semibold">Recently Played</h2>
              <Button
                variant="link"
                className="h-auto p-0 text-xs text-gray-400 hover:text-white hover:no-underline"
              >
                See all
              </Button>
            </div>
            <Songs playlists={recentlyPlayed} setCurrentSong={setCurrentSong} />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between px-2">
              <h2 className="text-sm text-gray-200 font-semibold">My Playlist</h2>
              <Button
                variant="link"
                className="h-auto p-0 text-xs text-gray-400 hover:text-white hover:no-underline"
              >
                See all
              </Button>
            </div>
            <Playlist playlists={playlists} />
          </div>
        </div>
      </div>
      <div className="mt-4 px-4 pb-4">
        <Button
          className="w-full justify-center rounded-xl bg-gray-300 text-gray-900 font-semibold hover:scale-105 transition-all hover:bg-gray-400 hover:text-gray-900"
          variant="ghost"
        >
          Create New Playlist
        </Button>
      </div>
    </div>
  );
}
