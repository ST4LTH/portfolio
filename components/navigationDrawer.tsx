"use client";

import { usePathname, useRouter } from "next/navigation";

export const NavigationDrawer = () => {
    const router = useRouter();
    
    const routeTo = (route: string) => {
        router.push(route);
    };

    const pathname = usePathname();

    return (
        <>
            <div onClick={() => routeTo("/")} className={"text-sm cursor-pointer"}>
                About Me
                <div
                className={
                    "h-[1px] bg-white transition-all " +
                    (pathname === "/" ? "w-full" : "w-0")
                }
                ></div>
            </div>
            <p
                onClick={() => routeTo("/shattered")}
                className={"text-sm cursor-pointer"}
            >
                Shattered Roleplay
                <div
                className={
                    "h-[1px] bg-white transition-all " +
                    (pathname === "/shattered" ? "w-full" : "w-0")
                }
                ></div>
            </p>
            <p onClick={() => routeTo("/store")} className={"text-sm cursor-pointer"}>
                ST4LTH
                <div
                className={
                    "h-[1px] bg-white transition-all " +
                    (pathname === "/store" ? "w-full" : "w-0")
                }
                ></div>
            </p>
        </>
    );
};
