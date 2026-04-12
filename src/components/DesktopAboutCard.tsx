interface CardProps {
  title: string;
  pText: string;
  optional?: string;
  image1?: string;
  image2?: string;
}

function DesktopAboutCard(props: CardProps) {
  const bulletPoints = props.pText.split("*");
  return (
    <>
      <div
        className={
          "flex w-[796px] flex-col items-center gap-6 rounded-[20px] bg-white border border-gray-100 py-8 px-10" +
          " " +
          props.optional
        }
      >
        <h1 className="flex self-center text-center text-[28px] font-medium text-logopurple">
          {props.title}
        </h1>

        {props.image1 && props.image2 && (
          <div className="flex flex-row gap-12">
            <img
              src={props.image1}
              className="h-[331px] w-[306px] rounded-[20px]"
              alt="2023 T-Shirt Front"
            />
            <img
              src={props.image2}
              className="h-[331px] w-[306px] rounded-[20px]"
              alt="2023 T-Shirt Back"
            />
          </div>
        )}

        {bulletPoints.length > 1 ? (
          <ul className="list-disc self-start pl-6">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className="pb-2 text-[18px] text-gray-700 leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <p className="flex text-center text-[18px] text-gray-700">
            {props.pText}
          </p>
        )}
      </div>
    </>
  );
}

export default DesktopAboutCard;