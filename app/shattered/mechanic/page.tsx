import Image from "next/image"
import Housing from '@/assets/mechanic/mechanic.jpg';  
import { X } from "lucide-react";
import Link from "next/link";

export default function() {
  return (
    <div className="flex gap-4 p-2 pr-5 w-fit rounded-xl">
      <Link href="/shattered">
        <X className="w-5 h-5 mt-2 cursor-pointer" />
      </Link>
      <Image 
        className="w-128"
        width={500}
        height={500} 
        alt="shattered-icon" 
        src={Housing.src} 
        />  
      <div className="mt-5">
        <div className="flex mb-5 gap-2 items-center">
          <p className="text-xl font-semibold">
            Mechanic
          </p>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Frontend made in React using Zustand and shadcn
          </li>
          <li className="mb-2">
            Backend made in Lua 
          </li>
        </ol>
      </div>
    </div>
  );
}
