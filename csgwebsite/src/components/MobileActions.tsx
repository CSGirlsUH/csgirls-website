interface CardProps {
  title: string;
  pText: string;
  bText: string;
  optional?: string;
}

function SmallActions(props: CardProps) {
  return (
    <div className="flex flex-col justify-between items-center align-top w-[195px] h-[194px] mr-[14px] bg-bggray rounded-[30px]">
      <h1 className="flex text-xl min-w-[160px] font-medium self-start pl-3 mt-3 mb-1">
        {props.title}
      </h1>
      <p className="flex pl-3 text-sm max-h-[60px] min-w-[30px] self-start">
        {props.pText}
      </p>
      <button
        className={
          "btn btn-primary normal-case text-xl font-medium mb-3" +
          " " +
          props.optional
        }
      >
        <a href="#">{props.bText}</a>
      </button>
    </div>
  );
}

export default SmallActions;
