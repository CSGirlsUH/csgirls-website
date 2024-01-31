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
          "bottom flex flex-col items-center gap-10 w-[796px] h-[643px] bg-bggray rounded-[20px]" +
          " " +
          props.optional
        }
      >
        <h1 className="flex text-[36px] text-medium self-center pt-10">
          {props.title}
        </h1>

        {/* Check if there are images passed through props */}
        {props.image1 && props.image2 && (
          <div className="flex flex-row gap-12 pt-3">
            {/* Placeholders for shirt images */}
            {/* <div className="bg-buttonpurple w-[157px] h-[170px] rounded-[20px]" /> */}
            {/* <div className="bg-buttonpurple w-[157px] h-[170px] rounded-[20px]" /> */}
            <img
              src={props.image1}
              className="w-[306px] h-[331px] rounded-[20px]"
              alt="2023 T-Shirt Front"
            />
            <img
              src={props.image2}
              className="w-[306px] h-[331px] rounded-[20px]"
              alt="2023 T-Shirt Back"
            />
          </div>
        )}

        {bulletPoints.length > 1 ? (
          <ul className="list-disc">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className="text-[20px] text-medium self-center ml-14"
              >
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <p className="flex text-[20px] text-medium text-center ">
            {props.pText}
          </p>
        )}
      </div>
    </>
  );
}
export default DesktopAboutCard;
