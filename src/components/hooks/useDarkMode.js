import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (value) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", value); // setting the value of darkMode based on what is stored in the browser window / aka localStorage

  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").classList.add("dark-mode"); // uses dom to set class to dark-mode
    } else {
      document.querySelector("body").classList.remove("dark-mode"); // uses dom to remove class of dark-mode
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
