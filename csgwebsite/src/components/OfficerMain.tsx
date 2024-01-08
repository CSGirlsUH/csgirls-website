import OfficerCard from "./OfficerCard";

const PICLINKS = {
  BANNER: "./Photos/CSG_Officers_Together.jpg",
  PRESIDENT: "./Photos/CSG_President_2023.jpg",
  VP_EXT: "./Photos/CSG_VP_External_2023.jpg",
  VP_INT: "./Photos/CSG_VP_Internal_2023.jpg",
  MARKETING_DIR: "./Photos/CSG_Marketing_Director_2023.jpg",
  PROF_DEV_CHAIR1: "./Photos/CSG_Prof_Dev_Chair1_2023.jpg",
  PROF_DEV_CHAIR2: "./Photos/CSG_Prof_Dev_Chair2_2023.jpg",
  MENT_CHAIR1: "./Photos/CSG_Mentorship_Chair1_2023.jpg",
  MENT_CHAIR2: "./Photos/CSG_Mentorship_Chair2_2023.jpg",
  SECY: "./Photos/CSG_Secretary_2023.jpg",
  WEBMASTER: "./Photos/CSG_Webmaster_2023.jpg",
};

const OFFICERS = {
  president: {
    name: "Rebecca Santos",
    discord: "https://discord.com/users/eckybae",
    linkedin: "https://www.linkedin.com/in/rebeccasantos106/",
    email: "rebeccamsantos7@gmail.com",
    pic: PICLINKS.PRESIDENT,
  },
  vp_ext: {
    name: "Carolyn Heron",
    discord: "https://discord.com/users/carisimo",
    linkedin: "https://www.linkedin.com/in/ana-c-heron/",
    email: "ana.heron02@gmail.com",
    pic: PICLINKS.VP_EXT,
  },
  vp_int: {
    name: "Chelsea Nguyen",
    discord: "https://discord.com/users/sheepsgardenn",
    linkedin: "https://www.linkedin.com/in/cngu/",
    // TODO: ADD CHELSEA EMAIL
    email: "#",
    pic: PICLINKS.VP_INT,
  },
  marketing_dir: {
    name: "Kaitlin Wood",
    discord: "https://discord.com/users/kaminji",
    linkedin: "https://www.linkedin.com/in/kaitlinwood03/",
    email: "wood.kaitlin3@gmail.com",
    pic: PICLINKS.MARKETING_DIR,
  },
  prof_dev_chair1: {
    name: "Daisy Gonzalez",
    discord: "https://discord.com/users/flowerspasms",
    linkedin: "https://www.linkedin.com/in/daigza09/",
    email: "daisy.gonzalez0214.dg@gmail.com",
    pic: PICLINKS.PROF_DEV_CHAIR1,
  },
  prof_dev_chair2: {
    name: "Maria Thomas",
    discord: "https://discord.com/users/straw6286",
    linkedin: "https://www.linkedin.com/in/maria-le-thomas/",
    email: "mlthomas4@uh.edu",
    pic: PICLINKS.PROF_DEV_CHAIR2,
  },
  ment_chair1: {
    name: "Reem Alkhalily",
    discord: "https://discord.com/users/jynxae",
    linkedin: "https://www.linkedin.com/in/reem-alkhalily-9a9152250/",
    email: "realkhalily@hotmail.com",
    pic: PICLINKS.MENT_CHAIR1,
  },
  ment_chair2: {
    name: "Lisa Zuniga",
    discord: "https://discord.com/users/zuuni#8270",
    linkedin: "https://www.linkedin.com/in/lisa-zuniga/",
    // TODO: ADD LISA EMAIL
    email: "#",
    pic: PICLINKS.MENT_CHAIR2,
  },
  secy: {
    name: "Neha Joshi",
    discord: "https://discord.com/users/neyhuh",
    linkedin: "https://www.linkedin.com/in/nehakjoshi/",
    email: "nehaykj@gmail.com",
    pic: PICLINKS.SECY,
  },
  webmaster: {
    name: "Sage Turner",
    discord: "https://discord.com/users/sayj",
    linkedin: "https://www.linkedin.com/in/sageturn01/",
    email: "sageturn01@gmail.com",
    pic: PICLINKS.WEBMASTER,
  },
};

function OfficerMain() {
  return (
    <>
      {/* Mobile Variant */}
      <section className="visible md:hidden flex flex-col">
        <img
          src={PICLINKS.BANNER}
          alt="2023-2024 Officer Team at First General Meeting"
        />
        <h1 className="font-poppins flex flex-row justify-center text-2xl">
          Meet the Officers!
        </h1>
      </section>

      {/* Mobile Officer Cards */}
      <section className="visible">
        <OfficerCard
          position="Webmaster"
          name={OFFICERS.webmaster.name}
          discord={OFFICERS.webmaster.discord}
          linkedin={OFFICERS.webmaster.linkedin}
          email={OFFICERS.webmaster.email}
          pic={PICLINKS.WEBMASTER}
        />
      </section>

      {/* Desktop Variant */}
    </>
  );
}

export default OfficerMain;
