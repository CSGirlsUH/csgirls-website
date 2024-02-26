import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OfficerMain from "../components/OfficerMain";

const Officers = () => {
  return (
    <>
      <div className="mx-auto my-auto bg-white font-poppins text-black">
        <Navbar />
        <OfficerMain />
        <Footer />
      </div>
    </>
  );
};

export default Officers;
