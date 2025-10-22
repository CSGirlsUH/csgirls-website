interface CardProps {
  title: string;
  pText: string;
  bText: string;
  bLink: string;
  optional?: string;
}

function SmallActions(props: CardProps) {
  return (
    <div className="mr-[14px] flex h-[194px] w-[195px] flex-col items-center justify-between rounded-[30px] bg-bggray align-top">
      <h1 className="mb-1 mt-3 flex min-w-[160px] self-start pl-3 text-xl font-medium">
        {props.title}
      </h1>
      <p className="flex max-h-[60px] min-w-[30px] self-start pl-3 text-sm">
        {props.pText}
      </p>
      <button
        className={
          "btn btn-primary mb-3 text-xl font-medium normal-case" +
          " " +
          props.optional
        }
      >
        <a href={props.bLink}>{props.bText}</a>
      </button>
    </div>
  );
}

export default SmallActions;
