import { useState, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Home from "../pages/Home";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const WEBLINKS = {
    REGISTER:
      "https://docs.google.com/forms/d/e/1FAIpQLSdE_W4GMqEJ2l7SzaAbjuUQ-cBt2OkFfM_PQq2wZuInOxCFsA/viewform",
    CONTACT: "https://linktr.ee/csgirls",
  };

  const bottomRef = useRef<HTMLDivElement>(null);

  function scrollToBottom() {
    // Check if page is on home page
    if (window.location.pathname !== "/home") {
      <Home event={true} />;
    }
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    console.log("scrolling");
  }

  return (
    <>
      {/* Desktop Variant */}
      <div className="flex justify-between items-center border-b border-bordergray md:border-0 md:pr-6 md:mr-[118px] ">
        {/* CSG Logo (Purple) */}
        <a href="/home">
          <img
            src="./icons/Purp_WhiteBG_Logo.png"
            className="w-14 h-14 m-4 md:w-[113px] md:h-auto md:my-4 md:ml-32"
          />
        </a>
        <ul className="hidden md:flex">
          {/* Nav Bar Links */}
          <div className=" my-7 text-lg flex flex-row ">
            <li>
              <a
                href="/home"
                className="flex flex-column text-black p-4 hover:text-gray-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="flex flex-column text-black p-4 hover:text-gray-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/officers"
                className="flex flex-column text-black p-4 hover:text-gray-500"
              >
                Officers
              </a>
            </li>

            <li>
              <a
                onClick={scrollToBottom}
                className="flex flex-column text-black p-4 hover:text-gray-500"
              >
                Events
              </a>
            </li>

            <li className="min-w-[144px] max-h-[60px]">
              <a
                href={WEBLINKS.CONTACT}
                className="flex flex-column text-black p-4 pr-7 hover:text-gray-500"
              >
                Contact Us
              </a>
            </li>
            <button className="btn btn-primary normal-case mt-1">
              <a href={WEBLINKS.REGISTER}>Register</a>
            </button>
          </div>
        </ul>

        {/* Mobile Variant */}
        <div onClick={handleNav} className="display block mr-8 md:hidden">
          {!nav ? (
            <AiOutlineClose size={30} onClick={handleNav} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] z-2 h-full bg-bggray ease-in-out duration-500"
              : "fixed left-[-100%] top-0 w-[60%] h-full bg-bggray z-2 ease-in-out duration-500"
          }
        >
          {/* <img src="./Purp_WhiteBG_Logo.png" className="w-[113px] my-4 ml-32" /> */}
          <ul className="flex flex-col pt-24 uppercase">
            <li>
              <a href="/about" className="m-4">
                About
              </a>
            </li>
            <li>
              <a href="/officers" className="m-4">
                Officers
              </a>
            </li>
            <li>
              <a href="/events" className="m-4">
                Events
              </a>
            </li>
            <li>
              <a href={WEBLINKS.CONTACT} className="m-4">
                Contact Us
              </a>
            </li>
            <li>
              <a href={WEBLINKS.REGISTER} className="m-4">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
