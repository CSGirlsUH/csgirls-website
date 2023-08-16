import react from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OrgActions from "./components/OrgActions";
import UpEvents from "./components/UpEvents";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-poppins  mx-full">
        <section>
          <Navbar />
        </section>

        <section>
          <Hero />
        </section>

        <section>
          <OrgActions />
        </section>

        <section>
          <UpEvents />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
