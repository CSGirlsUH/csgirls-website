import React from "react";

const UpEvents = () => {
  return (
    <>
      <div className="pt-[23px]">
        <h1 className="flex flex-row justify-center">Upcoming Events</h1>
        {/* All Sliders Cards */}
        <div className="pl-10">
          <div className="flex flex-row">
            <div className="bottom flex flex-col justify-center items-start w-[269px] h-[346px] mr-[51px] bg-bggray rounded-[20px]">
              <h1 className="flex text-[36px] text-medium self-center ">
                Oct 17
              </h1>
              <ul className="list-disc">
                <li>Lunch with Tim Apple</li>
                <li>Free T-Shirts for members!</li>
              </ul>
            </div>
            <div className="bottom flex flex-col justify-center items-start w-[269px] h-[346px] mr-[51px] bg-bggray rounded-[20px]">
              <h1 className="text-[36px] text-medium self-center top-0">
                Oct 18
              </h1>
              <ul className="list-disc">
                <li>Lunch with Tim Apple</li>
                <li>Free T-Shirts for members!</li>
              </ul>
            </div>
            <div className="bottom flex flex-col justify-center items-start w-[269px] h-[346px] mr-[51px] bg-bggray rounded-[20px]">
              <h1 className="text-[36px] text-medium self-center">Oct 19</h1>
              <ul className="list-disc">
                <li>Lunch with Tim Apple</li>
                <li>Free T-Shirts for members!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpEvents;
