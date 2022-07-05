import useConfirm from "../hooks/useConfirm";

function UseConfirmView() {
  // useConfirm
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

  return (
    <div>
      <h2>* useConfirm example</h2>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default UseConfirmView;
