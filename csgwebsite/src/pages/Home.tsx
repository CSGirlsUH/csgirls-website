import Navbar from "../components/Navbar";
import Hero from "../components/LandingHero";
import OrgActions from "../components/OrgActions";
import UpcomingEvents from "../components/UpEvents";
import Footer from "../components/Footer";
import { useEffect } from "react";

interface HomeProps {
  event?: boolean;
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  console.log("scrolling");
}

function Home({ event }: HomeProps) {
  useEffect(() => {
    if (event) {
      scrollToBottom();
    }
  }, [event]);

  return (
    <>
      <div className="font-poppins mx-full my-full overflow-hidden bg-white text-black">
        <Navbar />
        <Hero />
        <OrgActions />
        <UpcomingEvents />
        <Footer />
        {event ? scrollToBottom() : null}
      </div>
    </>
  );
}

export default Home;
