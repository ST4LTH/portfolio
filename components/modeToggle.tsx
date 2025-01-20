"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
            theme === "light" ? "scale-100" : "scale-0"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
            theme === "dark" ? "scale-100" : "scale-0"
        }`}
      />
      <Monitor
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
            theme === "system" ? "scale-100" : "scale-0"
        }`}
      />
      <span className="sr-only">Toggle { resolvedTheme }</span>
    </Button>
  )
}
