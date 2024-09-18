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
          <h1 className="mx-auto py-16 text-center text-5xl">
            Special Thanks to All of Our 2025 Sponsors!
          </h1>
          {/* Sponsor List */}
          <div className="max-h-auto mx-auto flex flex-col text-center text-4xl">
            {/* Our Platinum Sponsors */}
            <div className="flex flex-col justify-center gap-3">
              <div className="flex flex-row justify-center gap-3">
                <img
                  src="/icons/platinum_val.png"
                  alt="Platinum Icon"
                  className="max-h-10 max-w-10"
                />
                <h1 className="">Platinum Sponsors</h1>
                <img
                  src="/icons/platinum_val.png"
                  alt="Platinum Icon"
                  className="max-h-10 max-w-10"
                />
              </div>
              {/* Sponsor Platinum Logo Section */}
              <div className="bg-sponsorplatinum mb-8 flex h-[200px] w-screen justify-center"></div>
            </div>
            {/* Our Gold Sponsors */}
            <div className="flex flex-col justify-center gap-3">
              <div className="flex flex-row justify-center gap-3">
                <img
                  src="/icons/gold_val.png"
                  alt="Gold Icon"
                  className="max-h-10 max-w-10"
                />
                <h1 className="">Gold Sponsors</h1>
                <img
                  src="/icons/gold_val.png"
                  alt="Gold Icon"
                  className="max-h-10 max-w-10"
                />
              </div>
              {/* Sponsor Gold Logo Section */}
              <div className="bg-sponsorgold mb-8 flex h-[200px] w-screen justify-center"></div>
            </div>
            {/* Our Silver Sponsors */}
            <div className="flex flex-col justify-center gap-3">
              <div className="flex flex-row justify-center gap-3">
                <img
                  src="/icons/silver_val.png"
                  alt="Silver Icon"
                  className="max-h-10 max-w-10"
                />
                <h1 className="">Silver Sponsors</h1>
                <img
                  src="/icons/silver_val.png"
                  alt="Silver Icon"
                  className="max-h-10 max-w-10"
                />
              </div>
              {/* Sponsor Platinum Logo Section */}
              <div className="bg-sponsorsilver mb-8 flex h-[200px] w-screen justify-center"></div>
            </div>
            {/* Our Bronze Sponsors */}
            <div className="flex flex-col justify-center gap-3">
              <div className="flex flex-row justify-center gap-3">
                <img
                  src="/icons/bronze_val.png"
                  alt="Bronze Icon"
                  className="max-h-10 max-w-10"
                />
                <h1 className="">Bronze Sponsors</h1>
                <img
                  src="/icons/bronze_val.png"
                  alt="Bronze Icon"
                  className="max-h-10 max-w-10"
                />
              </div>
              {/* Sponsor Platinum Logo Section */}
              <div className="bg-sponsorbronze mb-8 flex h-[200px] w-screen justify-center"></div>
            </div>

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
