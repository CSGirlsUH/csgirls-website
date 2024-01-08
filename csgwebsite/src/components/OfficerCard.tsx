interface CardProps {
  position: string;
  name: string;
  discord: string;
  linkedin: string;
  email: string;
}

const OfficerCard = () => {
  return (
    <>
      {/* Mobile Variant */}
      <div className="flex flex-col w-269 h-346 bg-bggray"></div>
    </>
  );
};

export default OfficerCard;
