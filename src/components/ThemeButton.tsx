import { Moon, Sun } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
	const [theme, setThemeState] = React.useState<
		"theme-light" | "dark" | "system"
	>("dark")

	React.useEffect(() => {
		const isDarkMode = document.documentElement.classList.contains("dark")
		setThemeState(isDarkMode ? "dark" : "theme-light")
	}, [])

	React.useEffect(() => {
		const isDark =
			theme === "dark" ||
			(theme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		document.documentElement.classList[isDark ? "add" : "remove"]("dark")
	}, [theme])

	const isDark = theme === "dark"

	return (
		<Button onClick={() => setThemeState(isDark ? "theme-light" : "dark")} variant="ghost" size="icon">
			{!isDark ? <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				: <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
		</Button>
	)
}
