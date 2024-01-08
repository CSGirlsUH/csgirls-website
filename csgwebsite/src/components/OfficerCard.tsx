interface CardProps {
  name: string;
  position: string;
  pic: string;
  discord: string;
  linkedin: string;
  email: string;
}

const OfficerCard = (props: CardProps) => {
  return (
    <>
      {/* Mobile Variant */}
      <div className="flex flex-col w-[269px] h-[346px] bg-blue-800 rounded-[20px] ">
        {/* Title */}
        <h1 className=""></h1>
        <h1 className="flex flex-row text-[20px] font-firacode justify-center pt-2">
          {props.position}
        </h1>
        <h1>{props.name}</h1>
      </div>
    </>
  );
};

export default OfficerCard;
