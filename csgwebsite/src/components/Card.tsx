import React from "react";

interface CardProps {
  date: string;
  items: string[];
  optional?: string;
}

function Card(props: CardProps) {
  return (
    <div
      className={
        "bottom flex flex-col justify-center items-start w-[269px] h-[346px] mr-[51px] bg-bggray rounded-[20px]" +
        " " +
        props.optional
      }
    >
      <h1 className="flex text-[36px] text-medium self-center">{props.date}</h1>
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
