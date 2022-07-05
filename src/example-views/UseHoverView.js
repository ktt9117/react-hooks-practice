import { useState } from "react";
import useHover from "../hooks/useHover";

function UseHoverView() {
  const [log, setLog] = useState("");
  // useHover
  const onHover = () => {
    setLog("mouse entered");
    setTimeout(() => setLog("wait..."), 1000);
  };
  const hoverItem = useHover(onHover);

  return (
    <div>
      <h2>* useHover example</h2>
      <span ref={hoverItem}>Hover me</span>
      <div>{log}</div>
    </div>
  );
}

export default UseHoverView;
