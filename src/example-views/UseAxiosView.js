import useAxios from "../hooks/useAxios";

function UseAxiosView() {
  const { loading, data, refetch } = useAxios({ url: "https://api.publicapis.org/entries" });
  //console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`);
  return (
    <div>
      <h2>* useAxios example</h2>
      <div>{data && data.status}</div>
      {loading && <div>Loading</div>}
      <button onClick={refetch}>Reload</button>
      <div>Data: {JSON.stringify(data)}</div>
    </div>
  );
}

export default UseAxiosView;
