import useNetwork from "../hooks/useNetwork";

function UseNetworkView() {
  // useNetwork
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const networkStatus = useNetwork(handleNetworkChange);

  return (
    <div>
      <h2>* useNetwork example</h2>
      <h3>{networkStatus ? "OnLine" : "Offline"}</h3>
    </div>
  );
}

export default UseNetworkView;
