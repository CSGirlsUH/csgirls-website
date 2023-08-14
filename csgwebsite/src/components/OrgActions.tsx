import React from "react";

const OrgActions = () => {
  return (
    <div className="flex flex-row justify-between bg-bggray w-screen mx-auto py-[45px]">
      {/* Subscribe to Our Newsletter */}
      <div className="flex flex-col ml-[200px]">
        <h1 className="text-left text-[36px]">Subscribe to Our Newsletter!</h1>
        <div>
          <p className="text-left text-[20px] w-[370px] max-h-[121px]">
            Words words words about the newsletter that IDK yet.
          </p>

          <button className="flex justify-center items-center font-medium h-[42px] w-[126px] mt-2 bg-buttonpurple rounded-xl">
            <a href="#">Subscribe!</a>
          </button>
        </div>
      </div>

      {/* Donate to Our Organization */}

      <div className="flex flex-col content-center ">
        <h1 className="text-left text-[36px]">Donate to Our Organization!</h1>
        <div>
          <p className="text-left text-[20px] w-[370px] max-h-[121px]">
            Words words words about donating that IDK yet.
          </p>

          <button className="flex justify-center items-center font-medium h-[42px] w-[126px] mt-2 bg-buttonpurple rounded-xl">
            <a href="#">Donate!</a>
          </button>
        </div>
        {/* Heart svg underneath Donate to Org */}
        <div className="absolute mx-[130px] -my-5">
          <img
            src="./heart-svgrepo.svg"
            className="w-[200px] h-[200px] opacity-25"
          />
        </div>
      </div>

      {/* Meet the Officers */}
      <div className="flex flex-col mr-[250px] pl-2">
        <h1 className="text-left text-[36px]">Meet The Officers!</h1>
        <div>
          <p className="text-left text-[20px] w-[370px] max-h-[121px]">
            Words words words about how cool and awesome our officers are.
          </p>

          <button className="flex justify-center items-center font-medium h-[42px] w-[126px] mt-2 bg-buttonpurple rounded-xl">
            <a href="#">Learn More!</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrgActions;
