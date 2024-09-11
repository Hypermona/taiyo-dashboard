import { useMemo } from "react";

function useLocalStorage() {
  const getLocalStorage = (key: string) => {
    return window.localStorage.getItem(key);
  };
  const setLocalStorage = (key: string, value: string) => {
    return window.localStorage.setItem(key, value);
  };
  return useMemo(
    () => ({
      getLocalStorage,
      setLocalStorage,
    }),
    []
  );
}

export default useLocalStorage;
