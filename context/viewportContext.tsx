import { MOBILE, IPAD } from "../constants/viewports";
import { isClient } from "../lib/generic_utils";
import React, { createContext, useContext, useEffect, useState } from "react";

const ViewportContext = createContext({
  width: 0,
  height: 0,
});
export const ViewportProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);
  const [height, setHeight] = useState(isClient ? window.innerHeight : 0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};
export const useViewport = () => {
  const { width } = useContext(ViewportContext);
  const isMobile = width < MOBILE;
  const isIpad = width < IPAD;
  return { isMobile, isIpad };
};
