import Image from "next/image";
import { Button } from "./ui/button";
import hero from "../../public/cover2.png"


export default function Hero() {
  return (
    <div className="w-full min-h-[25vw] relative rounded-xl overflow-hidden group">
      <Image
        quality={100}
        src={hero}
        alt="Album cover for 'THE SECOND STEP : CHAPTER ONE' by TREASURE"
        fill
        priority
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col p-5 md:p-10 h-full items-start justify-end gap-4">
        <p className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 leading-tight text-white translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          THE SECOND STEP : <br className="hidden md:inline" /> CHAPTER ONE
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-4 translate-y-4 transition-all duration-500 ease-out delay-100 group-hover:opacity-100 group-hover:translate-y-0">
          TREASURE
        </p>
        <Button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-6 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
        >
          Listen Now
        </Button>
      </div>
    </div>
  );
}

