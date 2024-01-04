interface CardProps {
  title: string;
  pText: string;
  image1?: string;
  image2?: string;
}

function DesktopAboutCard(props: CardProps) {
  const bulletPoints = props.pText.split("*");
  return (
    <>
      <div className="bottom flex flex-col justify-center items-start w-[796px] h-[643px] bg-bggray rounded-[20px]">
        <h1 className="flex text-[36px] text-medium self-center">
          {props.title}
        </h1>
        {bulletPoints.length > 1 ? (
          <ul className="list-disc">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className="flex text-[20px] text-medium self-center"
              >
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <p className="flex text-[20px] text-medium self-center">
            {props.pText}
          </p>
        )}

        <div className="flex flex-row justify-around pt-3">
          {/* Placeholders for shirt images */}
          {/* <div className="bg-buttonpurple w-[157px] h-[170px] rounded-[20px]" /> */}
          {/* <div className="bg-buttonpurple w-[157px] h-[170px] rounded-[20px]" /> */}
          <img
            src={props.image1}
            className="w-[157px] h-[170px] rounded-[20px]"
            alt="2023 T-Shirt Front"
          />
          <img
            src={props.image2}
            className="w-[157px] h-[170px] rounded-[20px]"
            alt="2023 T-Shirt Back"
          />
        </div>
      </div>
    </>
  );
}
export default DesktopAboutCard;
