import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactMain from "../components/ContactMain";

const ContactUs = () => {
  return (
    <>
      <div className="font-poppins mx-auto my-auto h-screen overflow-hidden bg-white text-black">
        <Navbar />
        <ContactMain />
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
