interface CardProps {
  date: string;
  items: string[];
  optional?: string;
}

function SmallEventsCard(props: CardProps) {
  return (
    <div
      className={
        "mr-[14px] flex h-[194px] min-w-[195px] flex-col justify-start rounded-[30px] bg-bggray pl-3 align-top" +
        " " +
        props.optional
      }
    >
      <h1 className="flex self-center px-3 pb-1 pt-3 text-2xl">{props.date}</h1>
      <ol className="flex list-disc flex-col gap-1 text-base">
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
