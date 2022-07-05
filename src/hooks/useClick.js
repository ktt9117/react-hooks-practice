import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }

    const currentElement = element.current;
    if (currentElement) {
      currentElement.addEventListener("click", onClick);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

export default useClick;
