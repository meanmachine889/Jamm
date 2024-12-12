"use client";

import {
  Compass,
  Download,
  FolderMinus,
  Heart,
  Home,
  LibraryBig,
} from "lucide-react";

import * as React from "react";
import Logo from "../../public/Group 39512.png";
import CollectionList from "./collection-items";
import Image from "next/image";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Discover",
    url: "#",
    icon: Compass,
  },
  {
    title: "Collections",
    url: "#",
    icon: LibraryBig,
  },
];
const items1 = [
  {
    title: "Downloads",
    url: "#",
    icon: Download,
  },
  {
    title: "Favourites",
    url: "#",
    icon: Heart,
  },
  {
    title: "Local Files",
    url: "#",
    icon: FolderMinus,
  },
];

type LeftSidebarProps = {
  image: string;
}

export function LeftSidebar({ image }: LeftSidebarProps) {
  return (
    <div className="flex h-[85vh] w-[20%] flex-col bg-black text-white">
      <div className="flex items-center justify-between p-4">
        <Image src={Logo} alt="Logo" height={20} width={20} />
      </div>
      <div className="flex-1 overflow-y-auto mt-5 px-2">
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center justify-between px-2">
              <h2 className="text-xs font-semibold text-gray-500">Features</h2>
            </div>
            <CollectionList playlists={items} />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between px-2">
              <h2 className="text-xs font-semibold text-gray-500">Library</h2>
            </div>
            <CollectionList playlists={items1} />
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <Image
          height={200}
          width={200}
          src={
            image
          }
          alt={"Starboy"}
          className="w-[100%] object-cover"
        />
      </div>
    </div>
  );
}
