"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Volume2,
  Mic2,
  MonitorPlay,
  Share2,
} from "lucide-react";

type MusicPlayerProps = {
  title: string;
  artist: string;
  link: string;
};

const MusicPlayer = ({ title, artist, link }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume] = useState(75);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    
    audioRef.current = new Audio(link);

    const updateProgress = () => {
      if (audioRef.current) {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    };

    const setMetadata = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };

    const onAudioEnd = () => {
      setIsPlaying(false);
    };

    const audio = audioRef.current;

    
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setMetadata);
    audio.addEventListener("ended", onAudioEnd);

    
    if (isPlaying) {
      audio.play();
    }

    return () => {
      
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setMetadata);
      audio.removeEventListener("ended", onAudioEnd);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link]); 

  const playAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="h-[15vh] flex min-w-[100%] items-center justify-center border-t border-gray-700 bg-[#0d0d0d] text-white p-4 fixed bottom-0 left-0">
      <div className="max-w-9xl w-[100%] mx-auto flex items-center justify-between">
        <div className="flex min-w-[15%] max-w-[15%] flex-col items-start text-gray-400 justify-start">
          <p>{title}</p>
          <p className="text-xs text-gray-500">{artist}</p>
        </div>
        <div className="flex flex-col items-center flex-1 px-4">
          <div className="flex items-center gap-6 mb-2">
            <Shuffle className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <SkipBack className="w-5 h-5 text-gray-200 hover:text-white cursor-pointer" />
            <button
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition"
              onClick={playAudio}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-black fill-black" />
              ) : (
                <Play className="w-4 h-4 text-black fill-black ml-1" />
              )}
            </button>
            <SkipForward className="w-5 h-5 text-gray-200 hover:text-white cursor-pointer" />
            <Repeat className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          </div>

          <div className="w-full flex items-center gap-2">
            <span className="text-xs text-gray-400">
              {Math.floor((audioRef.current?.currentTime || 0) / 60)}:
              {String(Math.floor((audioRef.current?.currentTime || 0) % 60)).padStart(2, "0")}
            </span>
            <div className="flex-1 h-1 w-[30vw] bg-gray-600 rounded-full">
              <div
                className="h-full bg-blue-300 rounded-full relative transition-all"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 hover:opacity-100" />
              </div>
            </div>
            <span className="text-xs text-gray-400">
              {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center w-[20%] max-w-[30%] gap-4">
          <Mic2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          <MonitorPlay className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-gray-400" />
            <div className="w-24 h-1 bg-gray-600 rounded-full">
              <div
                className="h-full bg-white rounded-full relative"
                style={{ width: `${volume}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 hover:opacity-100" />
              </div>
            </div>
          </div>
          <Share2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
