import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { WEBLINKS } from './globalVariables'

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      {/* Desktop Variant */}
      <div className="flex items-center justify-between gap-24 border-b border-bordergray md:mr-[118px] md:border-0 md:pr-6">
        {/* CSG Logo */}
        <a href="/home">
          <img
            src="./icons/Purp_WhiteBG_Logo.png"
            className="m-4 h-14 w-14 md:my-4 md:ml-32 md:h-auto md:w-[113px]"
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex">
          <div className="my-7 flex flex-row text-lg">
            <li>
              <a href="/home" className="flex-column flex p-4 text-black hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="flex-column flex p-4 text-black hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a href="/officers" className="flex-column flex p-4 text-black hover:text-gray-500">
                Officers
              </a>
            </li>
            <li>
              <a href="/events" className="flex-column flex p-4 text-black hover:text-gray-500">
                Events
              </a>
            </li>
            <li>
              <a href="/sponsors" className="flex-column flex p-4 text-black hover:text-gray-500">
                Sponsors
              </a>
            </li>
            <li className="max-h-[60px] min-w-[144px]">
              <a href={WEBLINKS.CONTACT} className="flex-column flex p-4 pr-7 text-black hover:text-gray-500">
                Contact Us
              </a>
            </li>
            <button className="btn btn-primary mt-1 normal-case">
              <a href={WEBLINKS.REGISTER}>Register</a>
            </button>
          </div>
        </ul>

        {/* Mobile Hamburger */}
        <div onClick={handleNav} className="mr-8 block md:hidden">
          {!nav ? (
            <AiOutlineClose size={30} onClick={handleNav} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            !nav
              ? 'z-5 fixed left-0 top-0 h-full w-[60%] bg-bggray duration-500 ease-in-out'
              : 'z-5 fixed left-[-100%] top-0 h-full w-[60%] bg-bggray duration-500 ease-in-out'
          }
        >
          <ul className="flex flex-col pt-24 text-left uppercase">
            <li><a href="/home" className="m-4">Home</a></li>
            <li><a href="/about" className="m-4">About</a></li>
            <li><a href="/officers" className="m-4">Officers</a></li>
            <li><a href="/events" className="m-4">Events</a></li>
            <li><a href="/sponsors" className="m-4">Sponsors</a></li>
            <li><a href={WEBLINKS.CONTACT} className="m-4">Contact Us</a></li>
            <li><a href={WEBLINKS.REGISTER} className="m-4">Register</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar