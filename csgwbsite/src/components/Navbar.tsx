import { themify } from "react-icons/tfi";

const Navbar = () => {
  return (
    <>
      <ul className="">
        <div className="w-full text-lg flex flex-row justify-between">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>

          <li>
            <a href="#" className="text-white">
              Officers
            </a>
          </li>

          <li>
            <a href="#" className="text-white">
              Events
            </a>
          </li>

          <li>
            <a href="#" className="text-white">
              Contact Us
            </a>
          </li>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
