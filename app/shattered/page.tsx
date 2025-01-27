"use client"

import Image from "next/image"
import Shattered from '@/assets/shattered.png';  
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="flex gap-6 w-fit">
      <div>
        <Image 
          className="w-48 h-48"
          width={500}
          height={500} 
          alt="shattered-icon" 
          src={Shattered.src} 
        />   
      </div>
      <div className="mt-5">
        <p className="mb-1 text-xl font-semibold">
          Shattered Roleplay
        </p>
        <p className="mb-6 text-sm text-neutral-700 dark:text-neutral-400 ">
          Owner and Developer
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            A personal passion project I&apos;ve been working on since 2023
          </li>
          <li className="mb-2">
            Fully inhouse developed framework
          </li>
          <li className="mb-2">
            Fully own made UI made with React and Vue
          </li>
        </ol>
        <p className="mt-5 text-sm text-neutral-700 dark:text-neutral-400 ">
          Showcases
        </p>
        <div className="flex flex-wrap gap-1">
          <p onClick={() => router.push('/shattered/phone')} className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Phone
          </p>
          <p onClick={() => router.push('/shattered/spawnmenu')} className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Spawnmenu
          </p>
          <p onClick={() => router.push('/shattered/pausemenu')} className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Pausemenu
          </p>
          <p onClick={() => router.push('/shattered/mdt')} className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            MDT
          </p>
          <p onClick={() => router.push('/shattered/ems')} className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Ems MDT
          </p>
          <p onClick={() => router.push('/shattered/housing')} className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Housing
          </p>
          <p onClick={() => router.push('/shattered/mechanic')} className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Mechanic
          </p>
          <p onClick={() => router.push('/shattered/skilltree')} className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Skilltree
          </p>
        </div>
      </div>
    </div>
  );
}
