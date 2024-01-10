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
      {/* Mobile/Desktop Variant */}
      <div className="md:hidden flex flex-col self-center w-[269px] h-[335px] bg-bggray rounded-[20px] ">
        {/* Name */}
        <div className="text-center">
          <h1 className="inline-block text-logopurple text-2xl">{">"}</h1>{" "}
          <h1 className="inline-block text-xl font-firacode justify-center pt-2">
            {props.name}
          </h1>
        </div>

        {/* Image */}
        <img
          src={props.pic}
          className="w-[174px] h-[177px] mx-auto rounded-[20px] mt-4 object-cover"
          alt={"2023-2024" + " " + props.position + " " + props.name}
        />
        {/* Title */}
        <h1 className="text-center pt-2 font-medium">{props.position}</h1>
        {/* Contact Information */}
        <div className="flex flex-row justify-center pl-5 pt-4 gap-8">
          {/* Discord */}
          <a href={props.discord}>
            <img
              src="./icons/discord_icon_officer_M.svg"
              className="h-[35px] w-[35px] mr-4"
            />
          </a>
          {/* LinkedIn */}
          <a href={props.linkedin}>
            <img
              src="./icons/linkedin_icon_officer_M.svg"
              className="h-[35px] w-[35px] mr-4"
            />
          </a>
          {/* Email */}
          <a href={"mailto:" + props.email}>
            <img
              src="./icons/email_icon_officer_M.svg"
              className="h-[35px] w-[35px] mr-4"
            />
          </a>
        </div>
      </div>

      {/* Desktop Variant */}
      <div className="hidden md:flex flex-col self-center w-[437px] h-[587px] bg-bggray rounded-[20px] ">
        {/* Name */}
        <div className="text-center pt-5">
          <h1 className="inline-block text-logopurple text-2xl">{">"}</h1>{" "}
          <h1 className="inline-block text-3xl font-firacode justify-center pt-2">
            {props.name}
          </h1>
        </div>

        {/* Image */}
        <img
          src={props.pic}
          className="w-[295px] h-[300px] mx-auto rounded-[20px] mt-4 object-cover"
          alt={"2023-2024" + " " + props.position + " " + props.name}
        />
        {/* Title */}
        <h1 className="text-center pt-2 font-medium text-2xl">
          {props.position}
        </h1>
        {/* Contact Information */}
        <div className="flex flex-row justify-center pl-5 pt-12 gap-8">
          {/* Discord */}
          <a href={props.discord}>
            <img
              src="./icons/discord_icon_officer_D.svg"
              className="h-[70px] w-[55px] mr-4"
            />
          </a>
          {/* LinkedIn */}
          <a href={props.linkedin}>
            <img
              src="./icons/linkedin_icon_officer_D.svg"
              className="h-[70px] w-[55px] mr-4"
            />
          </a>
          {/* Email */}
          <a href={"mailto:" + props.email}>
            <img
              src="./icons/email_icon_officer_D.svg"
              className="h-[70px] w-[55px] mr-4"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default OfficerCard;
