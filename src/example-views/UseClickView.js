import useClick from "../hooks/useClick";

function UseClickView() {
  // useClick
  const onClick = () => console.log("clicked");
  const clickItem = useClick(onClick);

  return (
    <div>
      <h2>* useClick example</h2>
      <span ref={clickItem}>click me</span>
    </div>
  );
}

export default UseClickView;
