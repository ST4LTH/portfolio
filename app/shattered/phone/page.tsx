import Image from "next/image"
import Phone from '@/assets/phone/phone.png';  
import { X } from "lucide-react";
import Link from "next/link";

export default function phone() {
  return (
    <div className="flex gap-4 p-2 pr-5 w-fit rounded-xl">
      <Link href="/shattered">
        <X className="w-5 h-5 mt-2 cursor-pointer" />
      </Link>
      <Image 
        className=" h-full w-48"
        width={500}
        height={500} 
        alt="shattered-icon" 
        src={Phone.src} 
      />  
      <div className="mt-5">
        <div className="flex gap-2 items-center">
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
      </div>
    </div>
  );
}
