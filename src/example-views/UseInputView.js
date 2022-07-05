import useInput from "../hooks/useInput";

function UseInputView() {
  // useInput
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div>
      <h2>* useInput example</h2>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default UseInputView;
