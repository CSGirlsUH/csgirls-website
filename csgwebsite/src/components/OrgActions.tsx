// import React from "react";
import SmallActions from "./SmallActions";

const OrgActions = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="flex lg:hidden items-center justify-start overflow-x-visible overflow-y-hidden">
        <div className="py-4 flex items-center justify-start gap-3 mx-5">
          <SmallActions
            title="Subscribe to Our Newsletter!"
            pText="Words words words about the newsletter that IDK yet."
            bText="Subscribe!"
            optional="mt-1"
          />
          <SmallActions
            title="Donate to Our Organization!"
            pText="Words words words about donating that IDK yet."
            bText="Donate!"
            optional="mt-6"
          />
          <SmallActions
            title="Meet the Officers!"
            pText="Words words words about how cool and awesome our officers are."
            bText="Learn More!"
            optional="mt-8"
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex">
        <div className="flex flex-row justify-between bg-bggray w-screen py-[45px]">
          {/* Subscribe to Our Newsletter */}
          <div className="flex flex-col content-center ml-0 sm:ml-10 lg:ml-10 lg:justify-between">
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
