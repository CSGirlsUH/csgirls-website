import SmallCard from "./SmallCard";

const PICLINKS = {
  SHIRTF: "./Photos/front_shirt.png",
  SHIRTB: "./Photos/back_shirt.png",
  BANNERPIC: "./Photos/CSG_FGM1.jpg",
};

function AboutMain() {
  return (
    <>
      {/* Mobile Variant */}
      <div className="overflow-y-auto">
        {/* Banner Image */}
        <img src={PICLINKS.BANNERPIC} className="w-screen" />

        {/* Title Text */}
        <h1 className="flex flex-row font-poppins text-2xl pt-4 pb-2 justify-center ">
          About Us!
        </h1>

        {/* Main Text */}
        <div className="flex flex-col justify-center pl-3">
          <p className="pb-6">
            In August 2013, Computer Science Girls (CSGirls) was created as a
            platform for students to meet, discuss, and celebrate their love for
            computer science. Today, CSGirls is known for cultivating bright,
            talented professionals and upholding relationships with top
            employers in the country.
          </p>
          <p className="pb-6">
            CSGirls was founded on the principles of promoting a safe
            environment for students and recognizing excellence within the
            technology community at the University of Houston. Our main
            objective is to guide women in technology; however, we welcome
            people from all backgrounds. In line with our university's values,
            we strive to create a diverse and inclusive community for our
            members to promote fellowship.
          </p>
        </div>
        {/* Why Should You Join CSG? */}
        <h1 className="flex flex-row justify-center text-2xl">
          Why Should You Join CSGirls?
        </h1>

        {/* Elognated Card for T-Shirts */}
        <div className="flex flex-row justify-center pt-6">
          <SmallCard
            title="Free T-shirt for Yearly Members!"
            pText="$18 dollars for non-members. Semester members can always upgrade to yearly and get the free shirt for $10!"
            elongated={true}
            image1={PICLINKS.SHIRTF}
            image2={PICLINKS.SHIRTB}
          />
        </div>

        {/* Small Cards for information */}
        <section>
          <div className="flex flex-row flex-wrap gap-5 justify-center py-5">
            <div className="">
              <SmallCard
                title="Gain Hands on Experience!"
                pText="Get insight on technical and behavioral skills needed to land a job"
                elongated={false}
              ></SmallCard>
            </div>
            <div className="">
              <SmallCard
                title="Networking Opportunities!"
                pText="Connect with recruiters and other peers in STEM fields"
                elongated={false}
              ></SmallCard>
            </div>
            <div className="">
              <SmallCard
                title="Join Our in Fun Social Events!"
                pText="Attend our socials with free food and snacks provided"
                elongated={false}
              ></SmallCard>
            </div>
            <div className="">
              <SmallCard title="" pText="" elongated={false}></SmallCard>
            </div>
          </div>
        </section>
        {/* Use card components to add features/perks of joining */}
      </div>
    </>
  );
}

export default AboutMain;
