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
          "bottom flex h-[643px] w-[796px] flex-col items-center gap-10 rounded-[20px] bg-bggray" +
          " " +
          props.optional
        }
      >
        <h1 className="text-medium flex self-center pt-10 text-[36px]">
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
          <ul className="list-disc">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className="text-medium ml-14 self-center text-[20px]"
              >
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-medium flex text-center text-[20px] ">
            {props.pText}
          </p>
        )}
      </div>
    </>
  );
}
export default DesktopAboutCard;
