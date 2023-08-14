import react from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OrgActions from "./components/OrgActions";

function App() {
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
      </div>
    </>
  );
}

export default App;
