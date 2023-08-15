import React from "react";
import Carousel from "./Carousel";
import Card from "./Card";

const UpEvents = () => {
  const items: [string, string[]][] = [
    ["Oct 17", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 18", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 19", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 20", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 21", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 22", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 23", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 24", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 25", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 26", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
  ];

  return (
    <>
      <div className="pt-[23px]">
        <h1 className="flex flex-row justify-center text-4xl">
          Upcoming Events
        </h1>
        {/* Events Carousel */}
        <div className="carousel p-4 flex items-center justify-start overflow-x-auto">
          <Card optional="ml-6" date={items[0][0]} items={items[0][1]}></Card>
          {items.slice(1).map((item, index) => (
            <Card key={index} date={item[0]} items={item[1]} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UpEvents;
