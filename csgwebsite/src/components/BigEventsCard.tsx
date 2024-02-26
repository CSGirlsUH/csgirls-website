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
            "mr-[51px] flex min-h-[346px] min-w-[269px] flex-col rounded-[20px] bg-bggray" +
            " " +
            props.optional
          }
        >
          <h1 className="flex flex-col py-6 text-center text-[36px]">
            {props.date}
          </h1>
          <ol className="list-group list-disc pl-6">
            {props.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
        // If no images are provided, default to text only
      }
    </>
  );
}

export default BigEventsCard;
