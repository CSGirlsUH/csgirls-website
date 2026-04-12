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
          <img src={PICLINKS.BANNERPIC} className="w-screen object-cover object-center max-h-[300px]" />
          <h1 className="flex flex-row justify-center pb-2 pt-4 font-poppins text-2xl">
            About Us!
          </h1>
          <div className="flex flex-col justify-center px-5">
            <p className="pb-4 text-sm leading-relaxed text-gray-700">
              In August 2013, Computer Science Girls (CSGirls) was created as a
              platform for students to meet, discuss, and celebrate their love
              for computer science. Today, CSGirls is known for cultivating
              bright, talented professionals and upholding relationships with
              top employers in the country.
            </p>
            <p className="pb-6 text-sm leading-relaxed text-gray-700">
              CSGirls was founded on the principles of promoting a safe
              environment for students and recognizing excellence within the
              technology community at the University of Houston. Our main
              objective is to guide women in technology; however, we welcome
              people from all backgrounds. In line with our university's values,
              we strive to create a diverse and inclusive community for our
              members to promote fellowship.
            </p>
          </div>

          <h1 className="flex flex-row justify-center text-2xl font-medium">
            Why Should You Join CSGirls?
          </h1>

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

          <section>
            <div className="flex flex-row flex-wrap justify-center gap-5 py-5">
              <MobileAboutCard
                title="Gain Hands on Experience!"
                pText="Get insight on technical and behavioral skills needed to land a job."
                elongated={false}
              />
              <MobileAboutCard
                title="Big Networking Opportunities!"
                pText="Connect with recruiters and other peers in STEM fields."
                elongated={false}
              />
              <MobileAboutCard
                title="Join Our Fun Social Events!"
                pText="Attend our socials with free food and snacks provided."
                elongated={false}
              />
              <MobileAboutCard
                title="Get internship info first!"
                pText="We post information on our discord server about the ins and outs of the upcoming internship season."
                elongated={false}
              />
            </div>
          </section>
        </div>

        {/* Desktop Variant */}
        <div className="hidden md:flex md:flex-col">

          {/* Hero section — text left, image right */}
          <div className="flex flex-row items-center justify-between gap-10 px-20 pt-20 pb-16">

            {/* Left: Text */}
            <div className="flex flex-col max-w-[480px]">
              <h1 className="mb-4 text-left text-5xl font-semibold text-logopurple">
                About Us
              </h1>
              <p className="pb-4 text-lg leading-relaxed text-gray-700">
                In August 2013, Computer Science Girls (CSGirls) was created
                as a platform for students to meet, discuss, and celebrate
                their love for computer science. Today, CSGirls is known for
                cultivating bright, talented professionals and upholding
                relationships with top employers in the country.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                CSGirls was founded on the principles of promoting a safe
                environment for students and recognizing excellence within the
                technology community at the University of Houston. Our main
                objective is to guide women in technology; however, we welcome
                people from all backgrounds. We strive to create a diverse and
                inclusive community for our members to promote fellowship.
              </p>
            </div>

            {/* Right: Image — wider and horizontal */}
            <div className="flex flex-1 max-w-[680px] h-[400px] rounded-xl overflow-hidden">
              <img
                src={PICLINKS.BANNERPIC}
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>
          </div>

          {/* Why Join section */}
          <div className="bg-bggray py-16 px-10">
            <h1 className="flex flex-row justify-center pb-12 text-5xl font-medium">
              Why Should You Join CSGirls?
            </h1>
            <section className="flex flex-col gap-10">
              <div className="mx-20 flex flex-row flex-wrap justify-around gap-8">
                <BigCard
                  title="Free T-Shirt for Yearly Members!"
                  pText="$18 dollars for non-members. Semester members can always upgrade to a yearly membership to get the free shirt for only $10 additional dollars."
                  image1={PICLINKS.SHIRTF}
                  image2={PICLINKS.SHIRTB}
                />
                <BigCard
                  title="Gain Hands on Experience!"
                  pText="Get insight on technical and behavioral skills needed to land a job.*Learn technical skills used within the tech industry.*Get a better understanding of upcoming course material through our workshops."
                />
              </div>
              <div className="mx-20 flex flex-row flex-wrap justify-around gap-8">
                <BigCard
                  title="Huge Networking Opportunities!"
                  pText="Attend our socials with food and snacks provided.*Connect with recruiters and get valuable career advice from professionals."
                />
                <BigCard
                  title="Participate in Our Mentorship Program!"
                  pText="Launched in Spring 2023 this program is intended to enhance student's experience navigating the challenging coursework and job market.*As an underclassman, connect with mentors and upperclassmen who can help guide you to success.*As an upperclassman, become a mentor and help guide underclassmen to success in their major and careers."
                />
              </div>
            </section>
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default About