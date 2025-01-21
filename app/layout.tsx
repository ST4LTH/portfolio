"use client"

import { ThemeProvider } from "@/components/theme-provider"
/* import type { Metadata } from "next"; */
import localFont from "next/font/local";
import "./globals.css";
import "./style.scss";
import ProgressBar from "@/components/progressBar";
import { Navigation } from "@/components/navigation";
import { DiscordIcon } from "@/assets/icons/discord";
import { YoutubeIcon } from "@/assets/icons/youtube";
import { GithubIcon } from "@/assets/icons/github";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/* export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routes = ["/", "/shattered", "/store"]
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid grid-rows-[6vh_1fr_20px] items-center min-h-screen p-4 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <header className="h-fit w-full flex flex-col self-start items-end gap-1">
              <ProgressBar pages={routes} />
            </header>
            <div
              className="-z-10 absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(rgb(200,200,200)_1px,transparent_1px)] dark:bg-[radial-gradient(rgb(1,1,1)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
            />
            <main className="flex justify-self-center gap-8 row-start-2 items-center sm:items-start">
              {children}
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
              <Navigation pages={routes} />
              <div className="absolute fill-black dark:fill-white right-14 flex items-center gap-6 ">
                <GithubIcon className="w-10 h-10 hover:scale-105" />
                <YoutubeIcon className="w-10 h-10 hover:scale-105" />
                <DiscordIcon className="w-10 h-10 hover:scale-105" />
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

