import BigCard from "./BigCard";
import SmallEvents from "./SmallEvents";

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
      {/* Mobile */}
      <div className="flex md:hidden items-center justify-start overflow-x-scroll overflow-y-hidden">
        <div className="py-4 flex items-center justify-start">
          <SmallEvents optional="ml-6" date={items[0][0]} items={items[0][1]} />
          {items.slice(1).map((item, index) => (
            <SmallEvents key={index} date={item[0]} items={item[1]} />
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:flex">
          <div className="pt-[23px]">
            <h1 className="flex flex-row justify-center text-4xl pb-1">
              Upcoming Events
            </h1>
            {/* Events Carousel */}
            <div className="flex items-center justify-start overflow-x-auto overflow-y-hidden hover:overflow-x-scroll">
              <div className="py-4 flex items-center justify-start">
                <BigCard
                  optional="ml-6"
                  date={items[0][0]}
                  items={items[0][1]}
                />
                {items.slice(1).map((item, index) => (
                  <BigCard key={index} date={item[0]} items={item[1]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpEvents;
