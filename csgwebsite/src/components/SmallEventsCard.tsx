interface CardProps {
  date: string;
  items: string[];
  optional?: string;
}

function SmallEventsCard(props: CardProps) {
  return (
    <div
      className={
        "flex flex-col justify-start items-center align-top min-w-[195px] h-[194px] mr-[14px] bg-bggray rounded-[30px]" +
        " " +
        props.optional
      }
    >
      <h1 className="flex text-2xl self-center px-3 pt-3 pb-1">{props.date}</h1>
      <ol className="flex flex-col text-base gap-1 list-disc">
        {props.items.map((item, index) => (
          <li key={index} className="ml-6">
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SmallEventsCard;
