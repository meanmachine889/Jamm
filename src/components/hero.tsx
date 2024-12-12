import Image from "next/image";
import hero from "../../public/Cover2.png";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="w-[100%] relative rounded-xl">
      <Image
        quality={100}
        src={hero}
        alt="cover"
        height={900}
        width={900}
        className="rounded-xl object-fill"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
      <div className="absolute inset-0  flex flex-col p-5 h-[100%] items-start justify-end gap-2">
        <p className="text-5xl font-semibold mb-7 leading-snug">
          THE SECOND STEP : <br /> CHAPTER ONE
        </p>
        <p className="text-xl">TREASURE</p>
        <Button className="bg-indigo-500 text-white font-medium text-sm p-2 rounded-lg">
          Listen Now
        </Button>
      </div>
    </div>
  );
}
