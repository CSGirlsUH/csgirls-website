import React from "react";

const OrgActions = () => {
  return (
    <div className="flex flex-row justify-between bg-bggray w-screen py-[45px]">
      {/* Subscribe to Our Newsletter */}
      <div className="flex flex-col ml-[113px]">
        <h1 className="text-left text-[36px]">Subscribe to Our Newsletter!</h1>
        <div>
          <p className="text-left text-[20px] w-[370px] max-h-[121px]">
            Words words words about the newsletter that IDK yet.
          </p>

          <button className="flex justify-center items-center font-medium h-[42px] w-[126px] bg-buttonpurple rounded-xl">
            <a href="#">Subscribe!</a>
          </button>
        </div>
      </div>

      {/* Donate to Our Organization */}

      <div className="flex flex-col content-center">
        <h1 className="text-left text-[36px] z-1">
          Donate to Our Organization!
        </h1>
        <div className="z-1">
          <p className="text-left text-[20px] w-[370px] max-h-[121px]">
            Words words words about donating that IDK yet.
          </p>

          <button className="flex justify-center items-center font-medium bg-buttonpurple rounded-xl">
            <a href="#">Donate!</a>
          </button>
        </div>
        {/* This heart is a monstrosity */}
        <div className="absolute mx-[130px] -my-5">
          <img
            src="./heart-svgrepo.svg"
            className="w-[200px] h-[200px] opacity-25"
          />
        </div>
      </div>

      {/* Meet the Officers */}
      <div className="flex flex-col">
        <h1 className="text-left text-[36px]">Meet The Officers!</h1>
        <div>
          <p className="text-left text-[20px] w-[370px] max-h-[121px]">
            Words words words about how cool and awesome our officers are.
          </p>

          <button className="flex justify-center items-center font-medium bg-buttonpurple rounded-xl">
            <a href="#">Learn More!</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrgActions;
