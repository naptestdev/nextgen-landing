import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const [isMatching, setIsMatching] = useState(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    window.matchMedia(query).addEventListener("change", (e) => {
      setIsMatching(e.matches);
    });
  }, [query]);

  return isMatching;
};
