import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMain from "../components/AboutMain";

const ContactUs = () => {
  return (
    <>
      <div className="font-poppins mx-auto my-auto h-screen overflow-hidden bg-white text-black">
        <Navbar />
        <AboutMain />
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
