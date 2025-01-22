"use client"

import Image from "next/image"
import Phone from '@/assets/phone.png';  
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="flex gap-4 p-2 pr-5 w-fit rounded-xl bg-neutral-300/30 dark:bg-black/30">
      <Image 
        className=" h-full w-48"
        width={500}
        height={500} 
        alt="shattered-icon" 
        src={Phone.src} 
      />  
      <div className="mt-5">
        <div className="flex gap-2 items-center">
          <X onClick={() => router.push('/shattered')} className="w-5 h-5" />
          <p className="mb-1 text-xl font-semibold">
            Phone
          </p>
        </div>
        <p className="mb-6 text-sm text-neutral-700 dark:text-neutral-400 ">
          Collaboration project with Brandstationen
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Frontend made in Vue using pinia and shadcn
          </li>
          <li className="mb-2">
            Backend made in Lua 
          </li>
        </ol>
        <p className="mt-5 mb-2 text-sm text-neutral-700 dark:text-neutral-400 ">
          Apps
        </p>
        <div className="flex gap-1">
          <p className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Bank
          </p>
          <p className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Service
          </p>
          <p className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Phone
          </p>
        </div>
      </div>
    </div>
  );
}
