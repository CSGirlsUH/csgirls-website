// import React from "react";
import SmallActions from "./MobileActions";

const WEBLINKS = {
  REGISTER:
    "https://docs.google.com/forms/d/e/1FAIpQLSdE_W4GMqEJ2l7SzaAbjuUQ-cBt2OkFfM_PQq2wZuInOxCFsA/viewform",
  DONATE: "https://www.paypal.com/paypalme/CSGirls",
  OFFICERS: "/officers",
};

const OrgActions = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="mx-5 flex flex-row overflow-x-auto md:hidden md:overflow-hidden">
        <div className="flex flex-auto flex-row justify-around py-5 md:mx-5">
          <SmallActions
            title="Subscribe to Our Newsletter!"
            pText="Get monthly updates on what's happening with CSG."
            bText="Subscribe!"
            optional="mt-1"
          />
          <SmallActions
            title="Donate to Our Organization!"
            pText="Donate to help us out and get a warm fuzzy feeling insde."
            bText="Donate!"
            optional="mt-1"
          />
          <SmallActions
            title="Meet the Officers!"
            pText="Meet our current officers and committee members."
            bText="Learn More!"
            optional="mt-8"
          />
        </div>
      </div>
      {/* TODO: FIX BUTTON ON DONATE ACTION */}
      {/* Desktop View */}
      <div className="hidden md:flex md:flex-row">
        <div className="flex w-screen flex-1 justify-around bg-bggray py-[45px]">
          {/* Subscribe to Our Newsletter */}
          <div className="ml-10 flex flex-col content-center">
            <h1 className="text-left text-4xl">Subscribe to Our Newsletter!</h1>
            <div>
              <p className="max-h-[121px] max-w-[370px] pt-1 text-left text-xl">
                Get monthly updates on what's happening with CSG.
              </p>

              <button className="btn btn-primary mt-2 normal-case">
                <a href={WEBLINKS.REGISTER}>Subscribe!</a>
              </button>
            </div>
          </div>

          {/* Donate to Our Organization */}
          <div className="flex flex-col content-center">
            <h1 className="text-left text-4xl">Donate to Our Organization!</h1>
            <div>
              <p className="sm:w-[100px] max-h-[300px] pt-1 text-left text-xl md:max-w-[600px]">
                Donate to our organization to help us provide workshops,
                networking opportunities, and a warm fuzzy feeling inside.
              </p>

              <button className="btn btn-primary mt-2 normal-case">
                <a href={WEBLINKS.DONATE}>Donate!</a>
              </button>
            </div>
            {/* Heart svg underneath Donate to Org */}
            <div className="absolute -my-5 mx-[130px] h-[200px] w-[200px] shrink-0">
              <img src="./icons/heart-svgrepo.svg" className=" opacity-25" />
            </div>
          </div>

          {/* Meet the Officers */}
          <div className="flex flex-col content-center pl-2 ">
            <h1 className="w-44 text-left text-4xl md:w-[370px]">
              Meet The Officers!
            </h1>
            <div>
              <p className="max-h-[121px] max-w-[370px] pt-1 text-left text-xl">
                Meet our current officers and committee members.
              </p>

              <button className="btn btn-primary mt-1 normal-case md:mt-2">
                <a href={WEBLINKS.OFFICERS}>Learn More!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrgActions;
