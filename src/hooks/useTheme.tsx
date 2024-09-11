import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { Theme, setTheme } from "@/features/themeSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/features/store";

function useTheme(localKey: string = "theme") {
  const theme = useSelector((state: RootState) => state.theme);
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const dispatch = useAppDispatch();

  const handleThemeChange = (theme: Theme) => {
    dispatch(setTheme(theme));
    setLocalStorage(localKey, theme.toString());
  };

  useEffect(() => {
    const localTheme = getLocalStorage(localKey);
    setTheme(localTheme);
  }, []);

  useEffect(() => {
    const root = window.document.body;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return {
    theme,
    handleThemeChange,
  };
}

export default useTheme;
