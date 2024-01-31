// import Navbar from "./components/Navbar";
// import Card from "./components/Card";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMain from "../components/AboutMain";

function About() {
  return (
    <>
      <div className="font-poppins mx-full my-full overflow-y-auto bg-white text-black">
        <Navbar />
        <AboutMain />
        <Footer />
      </div>
    </>
  );
}

export default About;
