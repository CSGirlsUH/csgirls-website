interface CardProps {
  title: string;
  pText: string;
  heart?: boolean;
  elongated?: boolean;
  image1?: string;
  image2?: string;
}

const MobileAboutCard = (props: CardProps) => {
  return (
    <>
      {/* Change style of the div depending on if elongated is true/false */}
      {props.elongated ? (
        // Elognated Card

        <div className="h-[312px] w-[372px] rounded-[30px] bg-bggray">
          <div className="">
            <h1 className="flex flex-row justify-center pt-2 font-poppins text-[20px]">
              {props.title}
            </h1>
            <p className="flex flex-row justify-center pt-2 text-center font-poppins text-sm">
              {props.pText}
            </p>
            <div className="flex flex-row justify-around pt-3">
              {/* Placeholders for shirt images */}
              {/* <div className="bg-buttonpurple w-[157px] h-[170px] rounded-[20px]" /> */}
              {/* <div className="bg-buttonpurple w-[157px] h-[170px] rounded-[20px]" /> */}
              <img
                src={props.image1}
                className="h-[170px] w-[157px] rounded-[20px]"
                alt="2023 T-Shirt Front"
              />
              <img
                src={props.image2}
                className="h-[170px] w-[157px] rounded-[20px]"
                alt="2023 T-Shirt Front"
              />
            </div>
          </div>
        </div>
      ) : // If Small Card empty use placeholder div
      props.title === "" && props.pText === "" ? (
        <div className="h-44 w-44 rounded-[30px] bg-bggray">
          <div className="flex w-32  shrink-0 flex-row">
            <img src="./heart-svgrepo.svg" className=" opacity-25" />
          </div>
        </div>
      ) : (
        <div className="h-44 w-44 rounded-[30px] bg-bggray">
          <h1 className="ml-4 justify-center pt-2 text-left font-poppins text-[20px] font-medium">
            {props.title}
          </h1>
          <p className="ml-4 mr-1 text-left text-sm">{props.pText}</p>
        </div>
      )}
    </>
  );
};

export default MobileAboutCard;
