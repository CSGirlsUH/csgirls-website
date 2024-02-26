const Footer = () => {
  const DEVNAME = "@SageCT";
  const WEBLINKS = {
    INSTA: "https://www.instagram.com/csgirls_uh/",
    DISCORD: "https://discord.com/invite/KG3Eze4bQU",
    LINKEDIN: "https://www.linkedin.com/company/csgirls-university-of-houston/",
    SCT_GITHUB: "https://github.com/SageCT",
  };

  return (
    <>
      <div className="flex max-h-[100px] w-full flex-col place-items-center border-t border-bordergray bg-bggray text-[10px] md:text-base">
        <div className="flex flex-row justify-evenly justify-items-center">
          {/* Instagram svg */}
          <a href={WEBLINKS.INSTA}>
            <img
              src="./icons/camera-square-svgrepo.svg"
              className="mr-8 mt-2 h-[30px] w-[30px]"
            />
          </a>
          {/* Discord svg */}
          <a href={WEBLINKS.DISCORD}>
            <img
              src="./icons/discord-svgrepo.svg"
              className="mt-2 h-[35px] w-[35px]"
            />
          </a>
        </div>
        <div>
          <p>
            {"© 2023-2024 Computer Science Girls" +
              " | " +
              "Built and Designed By: "}
            <a href={WEBLINKS.SCT_GITHUB}>
              <u>{DEVNAME}</u>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
