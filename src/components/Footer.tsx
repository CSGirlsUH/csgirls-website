const Footer = () => {
  const DEVNAME = "@SageCT";
  const UPDATEDBY = "Zainab Qureshi";

  const WEBLINKS = {
    INSTA: "https://www.instagram.com/csgirls_uh/",
    DISCORD: "https://discord.com/invite/KG3Eze4bQU",
    LINKEDIN: "https://www.linkedin.com/company/csgirls-university-of-houston/",
    SCT_GITHUB: "https://github.com/SageCT",
    ZAINAB_LINKEDIN: "https://www.linkedin.com/in/zainabb-qureshi",
  };

  return (
    <div className="flex max-h-[100px] w-full flex-col items-center border-t border-bordergray bg-bggray py-3 text-[10px] md:text-base">
      <div className="flex flex-row justify-evenly">
        <a href={WEBLINKS.INSTA}><img src="./icons/camera-square-svgrepo.svg" className="h-[30px] w-[30px]" /></a>
        <a href={WEBLINKS.DISCORD}><img src="./icons/discord-svgrepo.svg" className="h-[35px] w-[35px]" /></a>
      </div>
      <div className="text-center">
        <p>
          © 2024 Computer Science Girls | Built and Designed By: <a href={WEBLINKS.SCT_GITHUB} target="_blank" rel="noopener noreferrer"><u>{DEVNAME}</u></a>
        </p>
        <p>
          Edited & Updated By: <a href={WEBLINKS.ZAINAB_LINKEDIN} target="_blank" rel="noopener noreferrer"><u>{UPDATEDBY}</u></a>
        </p>
      </div>
    </div>
  )
}

export default Footer
