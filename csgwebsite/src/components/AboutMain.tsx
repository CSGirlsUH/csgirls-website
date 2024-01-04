import SmallCard from "./SmallCard";
import BigCard from "./DesktopAboutCard";

const PICLINKS = {
  SHIRTF: "./Photos/front_shirt.png",
  SHIRTB: "./Photos/back_shirt.png",
  BANNERPIC: "./Photos/CSG_FGM1.jpg",
};

function AboutMain() {
  return (
    <>
      {/* Mobile Variant */}
      <div className="overflow-y-auto md:hidden">
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
            heart={true}
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
                pText="Get insight on technical and behavioral skills needed to land a job."
                elongated={false}
              ></SmallCard>
            </div>
            <div className="">
              <SmallCard
                title="Big Networking Opportunities!"
                pText="Connect with recruiters and other peers in STEM fields."
                elongated={false}
              ></SmallCard>
            </div>
            <div className="">
              <SmallCard
                title="Join Our in Fun Social Events!"
                pText="Attend our socials with free food and snacks provided."
                elongated={false}
              ></SmallCard>
            </div>
            <div className="">
              <SmallCard
                title="Get internship info first!"
                pText="We post information on our discord server about the ins and outs of the upcoming internship season."
                elongated={false}
              ></SmallCard>
            </div>
          </div>
        </section>
      </div>
      {/* Desktop Variant */}
      <div className="hidden md:flex flex-col overflow-y-auto md:visible">
        <div className="flex flex-row justify-between mx-20">
          <div className="flex flex-col">
            {/* Title Text */}
            <h1 className="flex flex-row font-poppins text-left text-6xl justify-left">
              About Us!
            </h1>
            {/* Main Text */}
            <div className="flex flex-col w-[730px] h-[300px] justify-center">
              <p className="pb-6">
                In August 2013, Computer Science Girls (CSGirls) was created as
                a platform for students to meet, discuss, and celebrate their
                love for computer science. Today, CSGirls is known for
                cultivating bright, talented professionals and upholding
                relationships with top employers in the country.
              </p>
              <p className="pb-6">
                CSGirls was founded on the principles of promoting a safe
                environment for students and recognizing excellence within the
                technology community at the University of Houston. Our main
                objective is to guide women in technology; however, we welcome
                people from all backgrounds. In line with our university's
                values, we strive to create a diverse and inclusive community
                for our members to promote fellowship.
              </p>
            </div>
          </div>
          {/* Hero Image */}
          <img
            src={PICLINKS.BANNERPIC}
            className="flex justify-between w-[944px] h-[477px] rounded-[20px]"
          />
        </div>
        {/* Why Join CSGirls? */}
        <h1 className="flex flex-row justify-center text-6xl pt-20">
          Why Should You Join CSGirls?
        </h1>
        {/* Big Cards for information */}
        <section className="flex flex-col gap-20 py-14">
          {/* TOP CARDS */}
          {/* T-shirt Information */}
          <div className="flex flex-row justify-around mx-40">
            <BigCard
              title="Free T-Shirt for Yearly Members!"
              pText="$18 dollars for non-members. Semester members can always upgrade to a yearly membership to get the free shirt for only $10 additional dollars."
              image1={PICLINKS.SHIRTF}
              image2={PICLINKS.SHIRTB}
            />

            <BigCard
              title="Gain Hands on Experience!"
              pText="Get insight on technical and behavioral skills needed to land a job.*Learn techincal skills used within the tech industry.*Get a better understanding of upcoming course material through our workshops."
            />
          </div>
          {/* BOTTOM CARDS */}
          <div className="flex flex-row justify-around mx-40">
            <BigCard
              title="Huge Networking Opportunities!"
              pText="Attend our socials with food and snacks provided.*Connect with recruiters and get valuable career advice from professionals."
            />

            <BigCard
              title="Participate in Our Mentorship Program!"
              pText="Launched in Spring 2023 this program is intended to enhance student's experience navigating the challenging coursework and job market.*As an underclassman, connect with mentors and upperclassmen who can help guide you to success in your major and career through our mentorship program.*As an upperclassman, become a mentor and help guide underclassmen to success in their major and careers."
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMain;
