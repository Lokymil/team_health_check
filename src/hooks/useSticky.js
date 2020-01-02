import { useState, useEffect } from "react";

export default (defaultValue) => {
  const [sticky, setSticky] = useState(defaultValue);

  const handleScroll = e => {
    setSticky(e.target.scrollingElement.scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return sticky;
};
