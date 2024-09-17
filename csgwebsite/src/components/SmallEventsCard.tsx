interface CardProps {
  date: string;
  startTime: string;
  endTime: string;
  items: string[];
  optional?: string;
}

function SmallEventsCard(props: CardProps) {
  return (
    <div
      className={
        'mr-[14px] flex h-[194px] min-w-[195px] flex-col justify-start rounded-[30px] bg-bggray pl-3 align-top' +
        ' ' +
        props.optional
      }
    >
      <h1 className="flex self-center pb-1 pt-3 text-2xl">{props.date}</h1>
      <ol className="flex list-disc flex-col gap-1 text-left text-base">
        {props.items.map((item, index) => (
          <div key={index}>
            <h3 className="font-poppins text-lg text-logopurple">
              {props.startTime == 'N/A'
                ? 'TBA'
                : props.startTime != props.endTime
                  ? props.startTime + ' - ' + props.endTime
                  : props.startTime}
            </h3>
            <li className="ml-5">{item}</li>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default SmallEventsCard;
