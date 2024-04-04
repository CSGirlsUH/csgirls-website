// import React from "react";

interface CardProps {
  date: string;
  time: string;
  items: string[];
  optional?: string;
}

function BigEventsCard(props: CardProps) {
  return (
    <div
      className={
        'mr-[51px] flex min-h-[20rem] w-[16rem] flex-col rounded-[20px] bg-bggray' +
        ' ' +
        props.optional
      }
    >
      <h1 className="flex flex-col pt-6 text-center text-[36px]">
        {props.date}
      </h1>
      <ol className="list-group list-disc pl-0 pt-2">
        {props.items.map((item, index) => (
          <li className="list-none pl-5 text-left text-xl" key={index}>
            <h3 className="text-left text-2xl text-logopurple">{props.time}</h3>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BigEventsCard;
