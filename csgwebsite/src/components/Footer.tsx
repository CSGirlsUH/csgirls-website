const Footer = () => {
  let name = "@SageCT";
  return (
    <>
      <div className="flex flex-col place-items-center w-full max-h-[100px]">
        <div className="flex flex-row justify-items-center justify-evenly">
          {/* Instagram svg */}
          <a href="#">
            <img
              src="./camera-square-svgrepo.svg"
              className="h-[30px] w-[30px] mr-8"
            />
          </a>
          {/* Discord svg */}
          <a href="#">
            <img src="./discord-svgrepo.svg" className="  h-[35px] w-[35px]" />
          </a>
        </div>
        <div>
          <p>
            {"© 2023-2024 Computer Science Girls" +
              " | " +
              "Built and Designed By: "}
            <u>{name}</u>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
