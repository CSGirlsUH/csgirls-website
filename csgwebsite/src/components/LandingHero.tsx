import { useTypewriter } from 'react-simple-typewriter'

import { WEBLINKS } from '../components/globalVariables'

const Hero = () => {
  const [message] = useTypewriter({
    words: ['Hello World!'],
    loop: 1,
  })

  return (
    <>
      <div className="ml-10 mr-2 flex flex-row justify-center overflow-x-auto pb-5 md:mr-10 md:pb-[70px] md:pl-0 md:pt-28">
        <div className="flex flex-col md:px-5">
          {/* Title Text */}
          <div className="ml-0 pb-2 pt-5 text-left font-firacode text-2xl md:pb-5 md:text-6xl ">
            <h1 className="inline-block text-logopurple">{'>\u00A0'}</h1>
            <div className="inline-block">
              <h1 className="inline-block text-black">
                {message}
                <span className="text-[#663072]">_</span>
              </h1>
            </div>
          </div>
          {/* Description Text */}
          <div className="text-left text-sm md:text-xl">
            <p className="flex pb-5 md:max-w-[677px] md:pb-9">
              Founded in 2013, Computer Science Girls (CSGirls) is the first
              organization at the University of Houston that focuses on
              supporting women and their impact in the technology field through
              workshops, networking events, and tech talks. As a non-profit
              organization, we provide our members with the tools to further
              their career and create opportunities for their success.
            </p>

            <p className="flex pb-3 md:min-h-[82px] md:w-[659px] md:pb-[22px]">
              We believe in encouraging and supporting women as well as
              underrepresented groups, within the University of Houston, to
              pursue a successful career in technology.
            </p>
            <div>
              <button className="btn btn-primary normal-case">
                <a href={WEBLINKS.REGISTER}>Become a member!</a>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className=" mx-auto hidden h-[500px] w-[1200px] justify-center rounded-xl bg-purple-300 md:ml-10 md:mr-6 md:flex">
          {/* <p className=" md:flex md:items-center ">HERO IMAGE</p> */}
          <img
            src="./Photos/CSG_Meeting_Wide.jpg"
            className="mx-auto flex flex-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default Hero
