import React from "react";
import { useState, useEffect } from "react";

const getWidth = () =>
  typeof window !== "undefined"
    ? window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    : false;

function useCurrentWitdh() {
  let [width, setWidth, loader] = useState(getWidth());

  useEffect(() => {
    let timeoutId = null;
    if (!getWidth()) {
      return null;
    }
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
}

function useBreakpoints(breakpoints) {
  if (typeof breakpoints !== "object" || breakpoints === null) {
    throw new Error("Invalid configuration object!");
  }

  let width = useCurrentWitdh();
  let result = {};

  if (width === false) {
    return null;
  }

  for (const key of Object.keys(breakpoints)) {
    if (breakpoints[key].min !== parseInt(breakpoints[key].min, 10)) {
      throw new Error("Min value should be an integer!");
    }

    if (
      breakpoints[key].max &&
      breakpoints[key].max !== parseInt(breakpoints[key].max, 10)
    ) {
      throw new Error("Max value should be an integer!");
    }

    if (breakpoints[key].max && breakpoints[key].min > breakpoints[key].max) {
      throw new Error("Min value should be lower or equal with max value!");
    }

    result[key] =
      width >= breakpoints[key].min &&
      (!breakpoints[key].max || width <= breakpoints[key].max);
  }

  return result;
}

export default useBreakpoints;
export { useCurrentWitdh, useBreakpoints };
