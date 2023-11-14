import React from "react";

interface CardProps {
  title: string;
  pText: string;
}

const SmallCard = (props: CardProps) => {
  return (
    <>
      <div className="w-32 h-32 bg-bggray rounded-[30px]"></div>
    </>
  );
};

export default SmallCard;
