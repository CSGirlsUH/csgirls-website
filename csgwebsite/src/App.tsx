import react from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "./App.css";

function App() {
  const [count, setCount] = react.useState(0);

  return (
    <>
      <div className="font-sans">
        <section>
          <Navbar />
        </section>

        <section>
          <Hero />
        </section>

        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div> */}
      </div>
    </>
  );
}

export default App;
