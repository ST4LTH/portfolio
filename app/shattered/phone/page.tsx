import Shattered from '@/assets/shattered.png';  

export default function About() {
  return (
    <div className="flex gap-6 w-fit">
      <div className="w-48 h-48">
        <img alt="shattered-icon" src={Shattered.src} />  
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
            Fully inhouse developed framework
          </li>
          <li className="mb-2">
            Fully own made UI made with React and Vue
          </li>
        </ol>
        <p className="mt-5 text-sm text-neutral-700 dark:text-neutral-400 ">
          Showcases
        </p>
        <div className="flex gap-1">
          <p className="text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Phone
          </p>
          <p className="text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            Spawnmenu
          </p>
          <p className="text-sm bg-black/10 hover:bg-black/20 dark:bg-black/30 hover:dark:bg-black/70 rounded w-fit px-1.5 py-0.5">
            MDT
          </p>
        </div>
      </div>
    </div>
  );
}
