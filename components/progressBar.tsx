"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "./modeToggle";
import {
  AlignJustifyIcon,
  PauseIcon,
  PlayIcon,
  XIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { NavigationDrawer } from "./navigationDrawer";
import { motion } from "framer-motion";

export default function ProgressBar({
  pages = ["/", "/about", "/contact", "/contact"],
  duration = 10000,
}) {
  const [progress, setProgress] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(-1);
  const [paused, setPaused] = useState(false);
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = pathname;

  const isSubroute = (baseRoute:string) => {
    return pathname.startsWith(baseRoute) && pathname !== baseRoute;
  }

  useEffect(() => {
    let pageRoute = pathname

    if (isSubroute('/shattered')) {
      setPaused(true);
      pageRoute = '/shattered'
    }

    if (currentPageIndex == -1 && pageRoute !== "/") {
      setPaused(true);
    }

    const pageIndex = pages.indexOf(pageRoute);
    if (pageIndex !== -1 && pageIndex !== currentPageIndex) {
      setProgress(0);
      setCurrentPageIndex(pageIndex);
    }
  }, [isSubroute, pathname, currentPage, pages, currentPageIndex]);

  useEffect(() => {
    if (currentPageIndex >= pages.length || paused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (duration / 100);

        if (newProgress >= 100) {
          clearInterval(interval);

          const nextPageIndex = currentPageIndex + 1;
          if (nextPageIndex < pages.length) {
            setProgress(0);
            setCurrentPageIndex(nextPageIndex);
            router.push(pages[nextPageIndex]);
          }

          return 100;
        }

        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentPageIndex, pages, duration, router, paused]);

  const togglePause = () => setPaused((prev) => !prev);
  const toggleMenu = () => setMenu((menu) => !menu);

  return (
    <>
      <div className="grid h-2 w-full gap-1 grid-cols-4">
        {pages.map((page, index) => (
          <div
            key={page}
            onClick={() =>
              page == currentPage ? togglePause() : router.push(page)
            }
            className="relative w-full h-1.5 hover:h-2 bg-black/10 dark:bg-black/50 rounded-full overflow-hidden mb-2"
          >
            <div
              className="absolute top-0 left-0 h-full bg-black dark:bg-white transition-all"
              style={{
                width: `${
                  index < currentPageIndex
                    ? 100
                    : index === currentPageIndex
                    ? progress
                    : 0
                }%`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center items-center gap-4 mt-1">
        <Button onClick={toggleMenu} variant="ghost" size="icon">
          <XIcon
            className={
              "transition-all absolute " +
              (menu ? "scale-100" : "rotate-90 scale-0")
            }
          />
          <AlignJustifyIcon
            className={
              "transition-all absolute " +
              (menu ? "rotate-90 scale-0" : "scale-100")
            }
          />
        </Button>
        {menu && (
          <motion.div
            initial={{ x: "-20%", opacity: 0 }} 
            animate={{ x: 0, opacity: 100 }} 
            exit={{ x: "-20%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 50, duration: 0.2 }}
            className="flex gap-4"
          >
            <NavigationDrawer />
          </motion.div>
        )}

        <div className="flex-grow" />
        <Button onClick={togglePause} variant="ghost" size="icon">
          {paused ? <PlayIcon /> : <PauseIcon />}
        </Button>
        <ModeToggle />
      </div>
    </>
  );
}
