// import React from "react";

interface CardProps {
  date: string;
  items: string[];
  optional?: string;
}

function BigEventsCard(props: CardProps) {
  return (
    <>
      {/* Change style of the div depending on if elongated is true/false */}
      {
        <div
          className={
            "mr-[51px] flex min-h-[20rem] w-[16rem] flex-col rounded-[20px] bg-bggray" +
            " " +
            props.optional
          }
        >
          <h1 className="flex flex-col py-6 text-center text-[36px]">
            {props.date}
          </h1>
          <ol className="list-group list-disc pl-0 pt-10">
            {props.items.map((item, index) => (
              <li className="list-none px-2 text-center text-xl" key={index}>
                {item}
              </li>
            ))}
          </ol>
        </div>
        // If no images are provided, default to text only
      }
    </>
  );
}

export default BigEventsCard;
