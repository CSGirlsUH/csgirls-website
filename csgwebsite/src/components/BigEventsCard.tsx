// import React from "react";

interface CardProps {
  date: string;
  startTime: string;
  endTime: string;
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
      <ol className="list-group list-disc pl-5 pt-2">
        {props.items.map((item, index) => (
          <>
            <h3 className="text-left text-2xl text-logopurple">
              {props.startTime == 'N/A'
                ? 'TBA'
                : props.startTime != props.endTime
                  ? props.startTime + ' - ' + props.endTime
                  : props.startTime}
            </h3>
            <li className="ml-6 list-disc text-left text-xl" key={index}>
              {item}
            </li>
          </>
        ))}
      </ol>
    </div>
  );
}

export default BigEventsCard;
