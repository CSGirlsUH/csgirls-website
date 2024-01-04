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
      <div></div>

      {/* Desktop Variant */}
    </>
  );
}

export default OfficerMain;
