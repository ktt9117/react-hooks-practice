import useNotification from "../hooks/useNotification";

function UseNotificationView() {
  const fireNotification = useNotification("Can I steal your Kimchi?", { body: "I love Kimchi, don't you?" });

  return (
    <div>
      <h2>* useNotification example</h2>
      <button onClick={fireNotification}>Hello</button>
    </div>
  );
}

export default UseNotificationView;
