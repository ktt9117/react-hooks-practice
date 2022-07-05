import { useRef } from "react";
import useScroll from "../hooks/useScroll";

function UseScrollView() {
  // useScroll
  const { y } = useScroll();
  const helloElement = useRef();
  const elementY = helloElement?.current?.offsetTop;

  return (
    <div style={{ height: "1000vh" }}>
      <h2>* useScroll example</h2>
      <h3 ref={helloElement} style={{ color: y > elementY ? "red" : "blue" }}>
        Hello!
      </h3>
    </div>
  );
}

export default UseScrollView;
