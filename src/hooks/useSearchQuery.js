import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export const useSearchQuery = () => {
  const location = useLocation();

  const search = useMemo(
    () => Object.fromEntries(new URLSearchParams(location.search).entries()),
    [location.search]
  );

  return search;
};
