// import React from "react";

const OrgActions = () => {
  return (
    <>
      {/* Mobile View */}

      {/* Desktop View */}
      <div className="hidden md:visible">
        <div className="flex flex-row justify-between bg-bggray w-screen py-[45px]">
          {/* Subscribe to Our Newsletter */}
          <div className="flex flex-col content-center ml-0 sm:ml-10 lg:ml-[200px] lg:justify-between">
            <h1 className="text-left text-4xl">Subscribe to Our Newsletter!</h1>
            <div>
              <p className="text-left text-xl w-[370px] max-h-[121px] pt-1">
                Words words words about the newsletter that IDK yet.
              </p>

              <button className="btn btn-primary normal-case mt-2">
                <a href="#">Subscribe!</a>
              </button>
            </div>
          </div>

          {/* Donate to Our Organization */}

          <div className="flex flex-col content-center">
            <h1 className="text-left text-4xl">Donate to Our Organization!</h1>
            <div>
              <p className="text-left text-xl w-[370px] max-h-[121px] pt-1">
                Words words words about donating that IDK yet.
              </p>

              <button className="btn btn-primary normal-case mt-2">
                <a href="#">Donate!</a>
              </button>
            </div>
            {/* Heart svg underneath Donate to Org */}
            <div className="absolute mx-[130px] -my-5 shrink-0">
              <img
                src="./heart-svgrepo.svg"
                className="w-[200px] h-[200px] opacity-25"
              />
            </div>
          </div>

          {/* Meet the Officers */}
          <div className="flex flex-col content-center mr-[250px] pl-2 ">
            <h1 className="text-left text-4xl w-44 md:w-[370px]">
              Meet The Officers!
            </h1>
            <div>
              <p className="text-left text-xl w-[370px] max-h-[121px] pt-1">
                Words words words about how cool and awesome our officers are.
              </p>

              <button className="btn btn-primary normal-case mt-1 md:mt-2">
                <a href="#">Learn More!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrgActions;
