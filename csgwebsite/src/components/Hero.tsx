import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between ml-48 mr-auto">
          {/* Title Text */}
          <div className="font-firacode text-6xl text-left pb-4">
            <h1 className="inline-block text-logopurple">{">_"}</h1>
            <h1 className="inline-block text-black">Hello World!</h1>
          </div>
          {/* Description Text */}
          <div className="text-[20px] text-left">
            <p className="flex w-[677px] pb-9">
              Founded in 2013, Computer Science Girls (CSGirls) is the first
              organization at the University of Houston that focuses on
              supporting women and their impact in the technology field through
              workshops, networking events, and tech talks. As a non-profit
              organization, we provide our members with the tools to further
              their career and create opportunities for their success.
            </p>

            <p className="flex w-[659px] pb-[22px]">
              We believe in encouraging and supporting women as well as
              underrepresented groups, within the University of Houston, to
              pursue a successful career in technology.
            </p>
            <div>
              <button className="flex h-[42px] w-[230px] text-[20px] my-auto justify-center font-medium text-black p-2 bg-buttonpurple hover:bg-purple-400 rounded-xl">
                <a href="">Become a member!</a>
              </button>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className=" flex justify-center min-w-[560px] h-[393px] bg-purple-300 mr-[400px] ml-20 rounded-xl">
          <p className="flex items-center ">HERO IMAGE</p>
          {/* <img src="./hero.png" className="w-[1000px] h-[500px]" /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
