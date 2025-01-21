import Image from "next/image"
import Shattered from '@/assets/st4lth.png';  

export default function Store() {
  return (
    <div className="flex gap-6 w-fit">
      <div>
        <Image 
          className="h-24 w-24 rounded-full"
          width={500}
          height={500} 
          alt="shattered-icon" 
          src={Shattered.src} 
        />   
      </div>
      <div className="mt-5">
        <p className="mb-1 text-xl font-semibold">
          ST4LTH Development
        </p>
        <p className="mb-6 text-sm text-neutral-700 dark:text-neutral-400 ">
          Store
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Been selling fivem scripts/interiors since 2022 with 100+ happy costumers
          </li>
          <li className="mb-2">
            Paid scripts sold on <a 
              href="https://st4lth.tebex.io/" 
              className="py-1 px-1.5 ml-0.5 transition-all bg-cyan-500/30 dark:bg-cyan-300/10 dark:hover:bg-cyan-500/15 rounded"
            >Tebex</a>
          </li>
          <li className="mb-2">
            Free scripts on my <a 
              href="https://github.com/orgs/ST4LTH-Development/repositories" 
              className="py-1 px-1.5 ml-0.5 transition-all bg-blue-500/30 dark:bg-blue-300/10 dark:hover:bg-blue-500/15 rounded"
            >Github</a>
          </li>
        </ol>
        <p className="mt-5 text-sm text-neutral-700 dark:text-neutral-400 ">
          Showcases
        </p>
        <div className="flex gap-1">
          <a 
            href="https://www.youtube.com/watch?v=0JWGxLMnOic" 
            className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Dialog
          </a>
          <a
            href="https://www.youtube.com/watch?v=5JguX9Ev-t8"  
            className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Hud
          </a>
          <a 
            href="https://www.youtube.com/watch?v=dBuLyVtyvvo"  
            className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Multicharacter
          </a>
          <a 
            href="https://www.youtube.com/watch?v=mjGotiE98pM"  
            className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Apartment Shell
          </a>
          <a 
            href="https://www.youtube.com/watch?v=WFyROFOLSwE"  
            className="cursor-pointer text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Mechanic MLO
          </a>
        </div>
      </div>
    </div>
  );
}
