import React from "react";

interface CardProps {
  title: string;
  // If type == true, then it's a list (For org events).
  // If type == false, then it's a paragraph (for org actions).
  type: boolean;
  pText?: string;
  items?: string[];
  optional?: string;
}

function SmallCard(props: CardProps) {
  return (
    <div
      className={
        "bottom flex flex-col justify-center items-start min-w-[135px] min-h-[194px] mr-[14px] bg-bggray rounded-xl" +
        " " +
        props.optional
      }
    >
      <h1 className="flex text-sm text-medium self-center px-3">
        {props.title}
      </h1>
      <p className="pl-3"></p>
    </div>
  );
}

export default SmallCard;
