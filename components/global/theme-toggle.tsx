"use client";

import { PiSunDimLight, PiMoonLight } from "react-icons/pi";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme();

    const switchTheme = () => {
        switch (theme) {
            case "light":
                setTheme("dark");
                break;
            case "dark":
                setTheme("light");
                break;
            default:
                break;
        }
    };

    const toggleTheme = () => {
        //@ts-ignore
        if (!document.startViewTransition) switchTheme();

        //@ts-ignore
        document.startViewTransition(switchTheme);
    };

    return (
        <Button onClick={toggleTheme} variant="ghost" className="p-[7.5px_15px] rounded-full bg-transparent hover:bg-transparent">
            <PiSunDimLight size={24} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <PiMoonLight size={24} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
