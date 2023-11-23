import Navbar from "../components/Navbar";
import Hero from "../components/LandingHero";
import OrgActions from "../components/OrgActions";
import UpcomingEvents from "../components/UpEvents";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="font-poppins mx-full my-full overflow-hidden bg-white text-black">
        <Navbar />
        <Hero />
        <OrgActions />
        <UpcomingEvents />
        <Footer />
      </div>
    </>
  );
}

export default Home;
