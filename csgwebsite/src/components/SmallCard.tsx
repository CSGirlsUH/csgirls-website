import React from "react";

interface CardProps {
  title: string;
  pText: string;
  elongated?: boolean;
  image?: string;
}

const SmallCard = (props: CardProps) => {
  return (
    <>
      {/* Change style of the div depending on if elongated is true/false */}
      {props.elongated ? (
        <div className=""></div>
      ) : (
        <div className="w-32 h-32 bg-bggray rounded-[30px]"></div>
      )}
    </>
  );
};

export default SmallCard;
