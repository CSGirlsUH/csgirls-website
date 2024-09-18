import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Sponsors = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="mx-auto my-auto bg-white font-poppins text-black">
        <Navbar />
        {/* Content for page */}
        <div className="min-h-screen bg-white">
          <h1 className="mx-auto text-center text-4xl">
            Special Thanks to All of Our 2025 Sponsors!
          </h1>
          {/* Sponsor List */}
          <div className="mx-auto flex flex-col text-center text-3xl">
            {/* Our Platinum Sponsors */}
            <div className="">
              <h1 className="">Our Platinum Sponsors</h1>
            </div>
            {/* Our Gold Sponsors */}
            <div className="">Our Gold Sponsors</div>
            {/* Our Silver Sponsors */}
            <div className="">Our Silver Sponsors</div>
            {/* Our Bronze Sponsors */}
            <div className="">Our Bronze Sponsors</div>

            {/* Jobs Combobox Dropdown Menu */}
            <div className="">
              <h1 className="text-center text-2xl">
                Want a Job Working for One of Our Sponsors?
              </h1>
            </div>
            {/* <div className="text-xl">Apply Here!</div> */}
            {/* IMPORT SHADCN COMBOBOX DROPDOWN */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Sponsors;
