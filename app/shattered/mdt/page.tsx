import Image from "next/image"
import Char from '@/assets/ems-mdt/char.png';  
import Journal from '@/assets/ems-mdt/journal.png';  
import List from '@/assets/ems-mdt/list.png'
import Overview from '@/assets/ems-mdt/overview.png'
import { X } from "lucide-react";
import Link from "next/link";

export default function mdt() {
  return (
    <div className="flex gap-4 p-2 pr-5 w-fit rounded-xl">
      <Link href="/shattered">
        <X className="w-5 h-5 mt-2 cursor-pointer" />
      </Link>
      <div className="grid grid-rows-2 grid-cols-2">
        <Image 
          className="w-64"
          width={500}
          height={500} 
          alt="shattered-icon" 
          src={Char.src} 
        />  
        <Image 
          className="w-64"
          width={500}
          height={500} 
          alt="shattered-icon" 
          src={Journal.src} 
        />  
        <Image 
          className="w-64"
          width={500}
          height={500} 
          alt="shattered-icon" 
          src={List.src} 
        />  
        <Image 
          className="w-64"
          width={500}
          height={500} 
          alt="shattered-icon" 
          src={Overview.src} 
        />  
      </div>
      <div className="mt-5">
        <div className="flex mb-5 gap-2 items-center">
          <p className="text-xl font-semibold">
            Ems MDT
          </p>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Frontend made in React using Zustand and Shadcn
          </li>
          <li className="mb-2">
            Backend made in Lua 
          </li>
          <li className="mb-2">
            Made with tabs like a browser, for efficient and easy usage.
          </li>
        </ol>
      </div>
    </div>
  );
}
