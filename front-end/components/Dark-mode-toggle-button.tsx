// import { useTheme } from 'next-themes'

import useTheme from "@/hooks/useTheme";
import { DarkIcon, LightIcon } from "./Icons";
import clsx from "clsx";

export default function DarkModeToggleButton(){

    const { theme, setTheme } = useTheme();

    return (
        <>
            <button className="
                inline-flex items-center 
                border-0 py-1 px-3 
                focus:outline-none 
                bg-slate-100 
                hover:bg-gray-50
                hover:text-orange-500
                dark:bg-slate-600
                dark:text-slate-400
                dark:hover:bg-slate-700
                dark:hover:text-yellow-300
                rounded text-base mt-4 md:mt-0"
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {
                    theme === 'dark' 
                    ? <DarkIcon />
                    : 
                    <LightIcon />
                }
            </button>

        </>
    )
}