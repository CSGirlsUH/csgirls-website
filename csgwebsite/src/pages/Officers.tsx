import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OfficerMain from "../components/OfficerMain";

const Officers = () => {
  return (
    <>
      <div className="font-poppins mx-auto my-auto overflow-hidden bg-white text-black">
        <Navbar />
        <OfficerMain />
        <Footer />
      </div>
    </>
  );
};

export default Officers;
