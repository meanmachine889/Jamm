import { ChevronLeft, ChevronRight, Ellipsis, Search } from "lucide-react";

export default function Header() {
    return(
        <div className="max-w-[100%] w-[100%] bg-zinc-900 py-3 flex items-center justify-between">
            <div className="flex gap-5 items-center justify-center">
                <ChevronLeft/>
                <ChevronRight/>
            </div>
            <div className="bg-gray-400 px-3 items-center rounded-full flex gap-2 w-[45vw]">
                <Search className="text-gray-800"/>
                <input type="text" placeholder="search for artists, songs or albums" className="bg-gray-400 placeholder:text-gray-700 placeholder:text-sm px-2 text-gray-900 w-[90%] py-2 border-none outline-none"/>
            </div>
            <div>
                <Ellipsis/>
            </div>
        </div>
    )
}