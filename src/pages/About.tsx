import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import MobileAboutCard from '@/components/MobileAboutCard'
import BigCard from '@/components/DesktopAboutCard'

const PICLINKS = {
  SHIRTF: './Photos/front_shirt.png',
  SHIRTB: './Photos/back_shirt.png',
  BANNERPIC: './Photos/CSG_FGM1new.jpg',
}

function About() {
  return (
    <>
      <div className="mx-full my-full overflow-y-auto bg-white font-poppins text-black">
        <Navbar />

        {/* Mobile Variant */}
        <div className="overflow-y-auto md:hidden">
          {/* Banner Image */}
          <img src={PICLINKS.BANNERPIC} className="w-screen" />

          {/* Title Text */}
          <h1 className="flex flex-row justify-center pb-2 pt-4 font-poppins text-2xl ">
            About Us!
          </h1>

          {/* Main Text */}
          <div className="flex flex-col justify-center pl-3">
            <p className="pb-6">
              In August 2013, Computer Science Girls (CSGirls) was created as a
              platform for students to meet, discuss, and celebrate their love
              for computer science. Today, CSGirls is known for cultivating
              bright, talented professionals and upholding relationships with
              top employers in the country.
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
            <MobileAboutCard
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
            <div className="flex flex-row flex-wrap justify-center gap-5 py-5">
              <div className="">
                <MobileAboutCard
                  title="Gain Hands on Experience!"
                  pText="Get insight on technical and behavioral skills needed to land a job."
                  elongated={false}
                ></MobileAboutCard>
              </div>
              <div className="">
                <MobileAboutCard
                  title="Big Networking Opportunities!"
                  pText="Connect with recruiters and other peers in STEM fields."
                  elongated={false}
                ></MobileAboutCard>
              </div>
              <div className="">
                <MobileAboutCard
                  title="Join Our in Fun Social Events!"
                  pText="Attend our socials with free food and snacks provided."
                  elongated={false}
                ></MobileAboutCard>
              </div>
              <div className="">
                <MobileAboutCard
                  title="Get internship info first!"
                  pText="We post information on our discord server about the ins and outs of the upcoming internship season."
                  elongated={false}
                ></MobileAboutCard>
              </div>
            </div>
          </section>
        </div>

        {/* Desktop Variant */}
        <div className="ml-10 mr-2 hidden flex-col justify-center overflow-x-auto overflow-y-auto pb-5 md:visible md:mr-10 md:flex md:pb-[70px] md:pl-0 md:pt-28">
          <div className="mx-20 flex flex-row justify-around pt-16">
            <div className="flex flex-col md:mx-5">
              {/* Title Text */}
              <h1 className="justify-left mb-2 flex flex-row text-left font-poppins text-6xl">
                About Us!
              </h1>
              {/* Main Text */}
              <div className="text-left text-sm md:text-xl">
                <p className="flex pb-5 md:max-w-[677px] md:pb-9">
                  In August 2013, Computer Science Girls (CSGirls) was created
                  as a platform for students to meet, discuss, and celebrate
                  their love for computer science. Today, CSGirls is known for
                  cultivating bright, talented professionals and upholding
                  relationships with top employers in the country.
                </p>
                <p className="flex pb-3 md:min-h-[82px] md:w-[659px] md:pb-[22px]">
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
            {/* <img
            
            className="sm:h-[25rem] sm:w-[40rem] mr-16 hidden justify-between rounded-[20px] object-cover md:flex md:h-[477px] md:w-[944px]"
          /> */}
            <div className=" mx-auto hidden h-[500px] w-[1200px] justify-center rounded-xl md:ml-10 md:mr-0 md:flex">
              {/* <p className=" md:flex md:items-center ">HERO IMAGE</p> */}
              <img
                src={PICLINKS.BANNERPIC}
                className="mx-auto flex flex-auto rounded-xl object-cover"
              />
            </div>
          </div>
          {/* Why Join CSGirls? */}
          <h1 className="flex flex-row justify-center pt-20 text-6xl">
            Why Should You Join CSGirls?
          </h1>
          {/* Big Cards for information */}
          <section className="flex flex-col gap-20 py-14">
            {/* TOP CARDS */}
            {/* T-shirt Information */}
            <div className="mx-40 flex flex-row flex-wrap justify-around gap-5">
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
            <div className="mx-40 flex flex-row flex-wrap justify-around gap-5">
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
        <Footer />
      </div>
    </>
  )
}

export default About
