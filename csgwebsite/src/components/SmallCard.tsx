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
        <div className="w-[372px] h-[312px] bg-bggray rounded-[30px]">
          <h1 className="flex flex-row text-[20px] font-poppins justify-center pt-2">
            {props.title}
          </h1>
          <p className="flex flex-row text-sm text-center font-poppins justify-center pt-2">
            {props.pText}
          </p>
          <div className="flex flex-row justify-around pt-3">
            {/* Placeholders for shirt images */}
            <div className="bg-buttonpurple w-[157px] h-[170px] rounded-[20px]" />
            <div className="bg-buttonpurple w-[157px] h-[170px] rounded-[20px]" />
            {/* <img
              src={props.image1}
              className="w-[200px] h-[200px] mt-4"
              alt="2023 T-Shirt Front"
            /> */}
            {/* <img
              src={props.image2}
              className="w-[200px] h-[200px] mt-4"
              alt="2023 T-Shirt Back"
            /> */}
          </div>
        </div>
      ) : (
        <div className="w-32 h-32 bg-bggray rounded-[30px]"></div>
      )}
    </>
  );
};

export default SmallCard;
