import { useEffect, useState } from "react";

/**
 * useDarkMode - manages dark mode toggle and persists the setting in local storage
 * @example
 * function DarkModeToggle() {
 *     const { isDarkMode, toggleDarkMode } = useDarkMode();
 *
 *     return (
 *         <div style={{ textAlign: "center", margin: "20px" }}>
 *             <p>Current Mode: {isDarkMode ? "Dark" : "Light"}</p>
 *             <button onClick={toggleDarkMode}>
 *                 Toggle to {isDarkMode ? "Light" : "Dark"} Mode
 *             </button>
 *         </div>
 *     );
 * }
 */
export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedPreference = localStorage.getItem("dark-mode");
        return savedPreference ? JSON.parse(savedPreference) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    const toggleDarkMode = () => setIsDarkMode((prev: boolean) => !prev);

    useEffect(() => {
        localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    return { isDarkMode, toggleDarkMode };
}
