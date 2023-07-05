import "./App.css";

function App() {
  const onClick = async () => {
    const response = await fetch(`/ping/${new Date().valueOf()}`);
    const text = await response.text();
    alert(text);
  };

  return (
    <>
      <div className="background"></div>
      <h1>Hello, World!</h1>
      <button onClick={onClick}>Ping</button>
    </>
  );
}

export default App;
