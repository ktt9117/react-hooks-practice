import usePreventLeave from "../hooks/usePreventLeave";

function UsePreventLeaveView() {
  // usePreventLeave
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <h2>* usePreventLeave example</h2>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}

export default UsePreventLeaveView;
