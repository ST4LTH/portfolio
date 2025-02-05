import { JavascriptIcon } from "@/assets/icons/javascript";
import { LuaIcon } from "@/assets/icons/lua";
import { ReactIcon } from "@/assets/icons/react";
import { TypescriptIcon } from "@/assets/icons/typescript";
import { VueIcon } from "@/assets/icons/vue";
import Image from "next/image"
import Edvin from '@/assets/edvin.png';  
import { SolidJSIcon } from "@/assets/icons/solidJS";
import { SvelteIcon } from "@/assets/icons/svelte";

export default function Home() {
  return (
    <div className="flex gap-6 w-fit">
      <Image 
        width={50}
        height={50}
        className="rounded-full h-24 w-24 z-10"
        src={Edvin.src} 
        alt="Edvin"
      />
      <div className="mt-5">
        <p className="mb-1 text-xl font-semibold">
          Hi I&apos;m Edvin
        </p>
        <p className="mb-6 text-sm text-neutral-700 dark:text-neutral-400 ">
          Also known as ST4LTH
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Freelance fullstack developer currently specializing in fivem development
          </li>
          <li className="mb-2">
            Been making fivem scripts since 2022
          </li>
          <li className="mb-2">
            Selling my own fivem scripts on 
            <a 
              href="https://st4lth.tebex.io/" 
              className="py-1 px-1.5 ml-1 transition-all bg-cyan-500/30 dark:bg-cyan-300/10 dark:hover:bg-cyan-500/15 rounded"
            >Tebex</a>
          </li>
        </ol>
        <p className="mt-5 text-sm text-neutral-700 dark:text-neutral-400 ">
          Skills
        </p>
        <div className="flex gap-2 pt-2">
          <JavascriptIcon className="w-10 h-10 hover:scale-110 transition-all" />
          <TypescriptIcon className="w-10 h-10 hover:scale-110 transition-all" />
          <ReactIcon className="w-10 h-10 hover:scale-110 transition-all" />
          <VueIcon className="w-10 h-10 hover:scale-110 transition-all" />
          <SolidJSIcon className="w-10 h-10 hover:scale-110 transition-all" />
          <SvelteIcon className="w-10 h-10 hover:scale-110 transition-all" />
          <LuaIcon className="w-10 h-10 hover:scale-110 transition-all" />
        </div>
      </div>
    </div>
  );
}
