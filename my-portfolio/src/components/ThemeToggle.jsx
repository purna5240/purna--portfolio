import { Moon, Sun } from "lucide-react";
import { useState,useEffect } from "react";
import {cn} from "../lib/util";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const StoredTheme=localStorage.getItem("theme")
    if(StoredTheme=="dark"){
       setIsDarkMode(true)
       document.documentElement.classList.add("dark")
    }
    else{
        setIsDarkMode(false)
       document.documentElement.classList.remove("dark")
    }
  }, [])
  
  const toggleTheme = () => {
    
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light")
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark")
      setIsDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme} className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
    )}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-red-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-300" />
      )}
    </button>
  );
};
