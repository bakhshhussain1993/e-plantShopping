import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for
          beautiful and healthy plants.
        </p>

        <button
          onClick={() => {
            window.location.href = "/products";
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
