import { useState, useEffect, FC, createElement, Fragment } from "react";

/** React component that renders its children client-side only / after first mount */
export const ClientOnly: FC = ({ children }) => {
  const hasMounted = useClientOnly();

  if (!hasMounted) {
    return null;
  }

  return createElement(Fragment, { children });
};

/** React hook that returns true if the component has mounted client-side */
export const useClientOnly = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};
