import react from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OrgActions from "../components/OrgActions";
import UpEvents from "../components/UpEvents";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="font-poppins mx-full overflow-hidden bg-white text-black">
        <Navbar />

        <Hero />

        <OrgActions />

        <UpEvents />

        <Footer />
      </div>
    </>
  );
}

export default Home;
