import "./App.css";

function App() {
  const onClick = async () => {
    try {
      const response = await fetch(`/ping/${new Date().valueOf()}`);
      const text = await response.text();
      alert(text);
    } catch (e) {
      alert("NET!");
    }
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
