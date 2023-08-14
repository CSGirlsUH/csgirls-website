import react from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OrgActions from "./components/OrgActions";

function App() {
  const [count, setCount] = react.useState(0);

  return (
    <>
      <div className="font-sans  mx-auto">
        <section>
          <Navbar />
        </section>

        <section>
          <Hero />
        </section>

        <section>
          <OrgActions />
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
