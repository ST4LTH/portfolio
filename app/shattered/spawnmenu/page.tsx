import Image from "next/image"
import Loadingscreen from '@/assets/spawnmenu/loadingscreen.jpg';  
import InGame from '@/assets/spawnmenu/ingame.png';  
import { X } from "lucide-react";
import Link from "next/link";

export default function spawnMenu() {
  return (
    <div className="flex gap-4 p-2 pr-5 w-fit rounded-xl">
      <Link href="/shattered">
        <X className="w-5 h-5 mt-2 cursor-pointer" />
      </Link>
      <div className="grid grid-rows-2">
        <Image 
          className="w-full h-48"
          width={500}
          height={500} 
          alt="shattered-icon" 
          src={Loadingscreen.src} 
        />  
        <Image 
          className="w-full h-48"
          width={500}
          height={500} 
          alt="shattered-icon" 
          src={InGame.src} 
        />  
      </div>
      <div className="mt-5">
        <div className="flex mb-5 gap-2 items-center">
          <p className="text-xl font-semibold">
            Spawnmenu
          </p>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Frontend made in Vue using pinia and Vuetify
          </li>
          <li className="mb-2">
            Backend made in Lua 
          </li>
          <li className="mb-2">
            Made as both loading screen and nui
          </li>
        </ol>
      </div>
    </div>
  );
}
