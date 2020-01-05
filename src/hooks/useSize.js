import { useEffect, useState } from "react";

import { BREAKPOINTS } from "../constants";

const sizeFn = window => {
  const small = window.innerWidth <= BREAKPOINTS.SMALL;
  const medium = window.innerWidth <= BREAKPOINTS.MEDIUM;
  const large = !small && !medium;
  return { width: window.innerWidth, height: window.innerHeight, small, medium, large };
};

function useSize() {
  const [size, setSize] = useState(sizeFn(window));

  useEffect(() => {
    function resize(e) {
      setSize(sizeFn(e.target));
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  return size;
}

export default useSize;
