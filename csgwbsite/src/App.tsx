import react from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = react.useState(0);

  return (
    <>
      <div className="font-sans">
        <div>
          <Navbar />
        </div>
        {/* Testing Stuff */}

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
