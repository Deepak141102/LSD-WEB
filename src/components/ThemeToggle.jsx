import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full transition duration-300 bg-gray-200 dark:bg-gray-700"
    >
      {theme === "dark" ? 
                        <Sun className="h-5 w-5 text-yellow-500" />
                        : 
                        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      }
    </button>
  );
};

export default ThemeToggle;
