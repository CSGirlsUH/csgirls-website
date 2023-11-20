interface CardProps {
  title: string;
  pText: string;
  elongated?: boolean;
  image1?: string;
  image2?: string;
}

const SmallCard = (props: CardProps) => {
  return (
    <>
      {/* Change style of the div depending on if elongated is true/false */}
      {props.elongated ? (
        // Elognated Card
        <div className="w-[372px] h-[312px] bg-bggray rounded-[30px]">
          <h1 className="flex flex-row text-[20px] font-poppins justify-center pt-2">
            {props.title}
          </h1>
          <p className="flex flex-row text-sm text-center font-poppins justify-center pt-2">
            {props.pText}
          </p>
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
              alt="2023 T-Shirt Front"
            />
          </div>
        </div>
      ) : // If Small Card empty use placeholder div
      props.title === "" && props.pText === "" ? (
        <div className="w-44 h-44 bg-bggray rounded-[30px]">
          <div className="flex flex-row  shrink-0 w-32">
            <img src="./heart-svgrepo.svg" className=" opacity-25" />
          </div>
        </div>
      ) : (
        <div className="w-44 h-44 bg-bggray rounded-[30px]">
          <h1 className="text-[20px] text-left font-medium font-poppins justify-center pt-2 ml-4">
            {props.title}
          </h1>
          <p className="ml-4 mr-1 text-sm text-left">{props.pText}</p>
        </div>
      )}
    </>
  );
};

export default SmallCard;
