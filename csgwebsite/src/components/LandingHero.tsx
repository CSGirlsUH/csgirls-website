const Hero = () => {
  return (
    <>
      {/* TODO: Add sm: breakpiont to have padding on left */}
      <div className="flex flex-row justify-center pb-5 mr-2 ml-10 md:pb-[70px] md:pt-28 md:pl-0 md:mr-10 overflow-x-auto">
        <div className="flex flex-col md:px-5">
          {/* Title Text */}
          <div className="font-firacode text-2xl pt-5 pb-2 ml-0 text-left md:text-6xl md:pb-5 ">
            <h1 className="inline-block text-logopurple">{">_"}</h1>
            <h1 className="inline-block text-black">Hello World!</h1>
          </div>
          {/* Description Text */}
          <div className="text-sm md:text-xl text-left">
            <p className="flex pb-5 md:max-w-[677px] md:pb-9">
              Founded in 2013, Computer Science Girls (CSGirls) is the first
              organization at the University of Houston that focuses on
              supporting women and their impact in the technology field through
              workshops, networking events, and tech talks. As a non-profit
              organization, we provide our members with the tools to further
              their career and create opportunities for their success.
            </p>

            <p className="flex pb-3 md:w-[659px] md:min-h-[82px] md:pb-[22px]">
              We believe in encouraging and supporting women as well as
              underrepresented groups, within the University of Houston, to
              pursue a successful career in technology.
            </p>
            <div>
              <button className="btn btn-primary normal-case">
                <a href="/register">Become a member!</a>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className=" hidden md:flex justify-center w-[1200px] h-[500px] bg-purple-300 mx-auto md:mr-6 md:ml-10 rounded-xl">
          <p className=" md:flex md:items-center ">HERO IMAGE</p>
          {/* <img
            src="./Photos/Random_Meeting.jpg"
            className="w-[1000px] h-[500px]"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
