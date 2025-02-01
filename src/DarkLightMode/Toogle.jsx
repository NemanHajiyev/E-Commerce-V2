import { useState, useEffect } from "react";
import "../DarkLightMode/Toogle.css";

export const Toggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={() => setIsDarkMode(!isDarkMode)}
                checked={isDarkMode}
            />
            <label htmlFor="check" className="toggle-label">
                {isDarkMode ? "🌙" : "☀️"}
            </label>
        </div>
    );
};
