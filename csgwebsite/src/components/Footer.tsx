const Footer = () => {
  let name = "@SageCT";
  return (
    <>
      <div className="flex flex-col text-[10px] md:text-base place-items-center w-full max-h-[100px] border-t border-bordergray bg-bggray">
        <div className="flex flex-row justify-items-center justify-evenly">
          {/* Instagram svg */}
          <a href="#">
            <img
              src="./camera-square-svgrepo.svg"
              className="h-[30px] w-[30px] mr-8 mt-2"
            />
          </a>
          {/* Discord svg */}
          <a href="#">
            <img
              src="./discord-svgrepo.svg"
              className="h-[35px] w-[35px] mt-2"
            />
          </a>
        </div>
        <div>
          <p>
            {"© 2023-2024 Computer Science Girls" +
              " | " +
              "Built and Designed By: "}
            <a href="https://github.com/SageCT">
              <u>{name}</u>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
