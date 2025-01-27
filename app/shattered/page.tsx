import Image from "next/image";
import Shattered from '@/assets/shattered.png';  
import Link from "next/link";

export default function shattered() {
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
          <Link href="/shattered/phone">
            <p className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
              Phone
            </p>
          </Link>
          <Link href="/shattered/spawnmenu">
            <p className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
              Spawnmenu
            </p>
          </Link>
          <Link href="/shattered/pausemenu">
            <p className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
              Pausemenu
            </p>
          </Link>
{/*           <Link href="/shattered/mdt">
            <p className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
              MDT
            </p>
          </Link> */}
          <Link href="/shattered/ems">
            <p className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
              Ems MDT
            </p>
          </Link>
          <Link href="/shattered/housing">
            <p className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
              Housing
            </p>
          </Link>
          <Link href="/shattered/mechanic">
            <p className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
              Mechanic
            </p>
          </Link>
          <Link href="/shattered/skilltree">
            <p className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
              Skilltree
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
