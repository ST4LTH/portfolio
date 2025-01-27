"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Navigation = ({
  pages = ["/", "/about", "/contact"],
}: {
  pages: string[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = pathname;

  // Check if the route matches "shattered/*" but not "/shattered"
  const isShatteredSubRoute = /^\/shattered\/.+/.test(currentPage);
  if (isShatteredSubRoute) return null; // Don't render if it's a "shattered/*" route

  const currentPageIndex = pages.indexOf(currentPage);

  return (
    <div className="flex gap-1">
      {currentPageIndex > 0 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push(pages[currentPageIndex - 1])}
        >
          <ChevronLeft />
        </Button>
      )}

      {currentPageIndex < pages.length - 1 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push(pages[currentPageIndex + 1])}
        >
          <ChevronRight />
        </Button>
      )}
    </div>
  );
};
