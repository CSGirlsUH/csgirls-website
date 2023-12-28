// import React from "react";

interface CardProps {
  date: string;
  items: string[];
  optional?: string;
  elongated?: boolean;
  image1?: string;
  image2?: string;
}

function Card(props: CardProps) {
  return (
    <>
      {/* Change style of the div depending on if elongated is true/false */}
      {props.elongated ? (
        <div
          className={
            "bottom flex flex-col justify-center items-start min-w-[269px] min-h-[346px] mr-[51px] bg-bggray rounded-[20px]" +
            " " +
            props.optional
          }
        >
          <h1 className="flex text-[36px] text-medium self-center">
            {props.date}
          </h1>
          <ol className="list-group list-disc pl-6">
            {props.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      ) : // If no images are provided, default to text only
      props.image1 === "" && props.image2 === "" ? (
        <div></div>
      ) : (
        <div className="w-[796px] h-[643px]"></div>
      )}
    </>
  );
}

export default Card;
