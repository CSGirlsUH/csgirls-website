import React from "react";

const Hero = () => {
  return (
    <>
      <div className="ml-6">
        <div className="font-firacode  text-6xl text-left">
          <h1 className="inline-block text-logopurple">{">_"}</h1>
          <h1 className="inline-block text-black">Hello World!</h1>
        </div>

        <p className="flex max-w-[677px] max-h-[181px] text-left pb-[39px]">
          Founded in 2013, Computer Science Girls (CSGirls) is the first
          organization at the University of Houston that focuses on supporting
          women and their impact in the technology field through workshops,
          networking events, and tech talks. As a non-profit organization, we
          provide our members with the tools to further their career and create
          opportunities for their success.
        </p>

        <p className="flex max-w-2xl max-h-[82px] text-left">
          We believe in encouraging and supporting women as well as
          underrepresented groups, within the University of Houston, to pursue a
          successful career in technology.
        </p>
      </div>
    </>
  );
};

export default Hero;
