import React, { useState } from "react";
import { themify } from "react-icons/tfi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="flex flex-row ">
        <ul className="">
          <div className="w-full h-24 max-w-[1240px] mx-auto text-lg flex flex-row justify-between">
            <li>
              <a href="#" className="text-white p-4 hover:text-gray-300">
                About
              </a>
            </li>

            <li>
              <a href="#" className="text-white p-4">
                Officers
              </a>
            </li>

            <li>
              <a href="#" className="text-white p-4">
                Events
              </a>
            </li>

            <li>
              <a href="#" className="text-white p-4">
                Contact Us
              </a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
