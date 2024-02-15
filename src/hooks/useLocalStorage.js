import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
