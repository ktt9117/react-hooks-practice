import { useRef } from "react";
const useFullscreen = (callback) => {
  const element = useRef();

  const doCallback = (isFullscreen) => {
    if (callback && typeof callback === "function") {
      callback(isFullscreen);
    }
  };

  const triggerFull = () => {
    const currentElem = element.current;
    if (currentElem) {
      if (currentElem.requestFullScreen) {
        currentElem.requestFullscreen();
      } else if (currentElem.mozRequestFullScreen) {
        currentElem.mozRequestFullScreen();
      } else if (currentElem.webkitRequestFullscreen) {
        currentElem.webkitRequestFullscreen();
      } else if (currentElem.msRequestFullscreen) {
        currentElem.msRequestFullscreen();
      }

      doCallback(true);
    }
  };

  const triggerExit = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    doCallback(false);
  };

  return {
    element,
    triggerFull,
    triggerExit,
  };
};

export default useFullscreen;
