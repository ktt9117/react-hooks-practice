import useFadeIn from "../hooks/useFadeIn";

function UseFadeInView() {
  const fadeInH1 = useFadeIn(2, 2);
  const fadeInP = useFadeIn(2, 2);

  return (
    <div>
      <h2>* useFadeIn example</h2>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalala</p>
    </div>
  );
}

export default UseFadeInView;
