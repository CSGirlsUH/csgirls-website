import { useTypewriter } from 'react-simple-typewriter'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmallActions from '@/components/MobileActions'
import { WEBLINKS } from '@/components/globalVariables'

function Home() {
  const [message] = useTypewriter({
    words: ['Where women in tech belong.', 'Build. Connect. Grow.', 'Join us at UH.'],
    loop: 0,
  })

  return (
    <>
      <div className="mx-full my-full overflow-hidden bg-white font-poppins text-black">
        <Navbar />

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:px-20 md:pt-20 md:pb-16 px-6 pt-8 pb-6 gap-8">
          
          {/* Left: Text */}
          <div className="flex flex-col md:max-w-[520px]">
            {/* Animated headline */}
            <div className="pb-4 text-left text-2xl md:text-5xl font-poppins">
              <h1 className="font-semibold text-logopurple leading-tight min-h-[3rem] md:min-h-[4rem]">
                {message}
                <span className="text-[#663072]">_</span>
              </h1>
            </div>

            {/* Description */}
            <p className="pb-4 text-sm md:text-lg text-gray-700 leading-relaxed">
              Founded in 2013, Computer Science Girls (CSGirls) is the first
              organization at the University of Houston that focuses on
              supporting women and their impact in the technology field
              through workshops, networking events, and tech talks.
            </p>

            <p className="pb-6 text-sm md:text-lg text-gray-700 leading-relaxed">
              We believe in encouraging and supporting women as well as
              underrepresented groups within the University of Houston to
              pursue a successful career in technology.
            </p>

            <div className="flex gap-4">
              <button className="btn btn-primary normal-case">
                <a href={WEBLINKS.REGISTER}>Become a member!</a>
              </button>
              <button className="btn btn-outline normal-case border-logopurple text-logopurple hover:bg-logopurple hover:text-white">
                <a href="/events">View events</a>
              </button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="hidden md:flex md:flex-1 md:max-w-[600px] md:h-[380px] rounded-xl overflow-hidden">
            <img
              src="./Photos/Bannerpicnew.jpg"
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </div>
        </div>

        {/* Mobile action cards */}
        <div className="mx-5 flex flex-row overflow-x-auto md:hidden">
          <div className="flex flex-auto flex-row justify-around py-5">
            <SmallActions
              title="Subscribe to Our Newsletter!"
              pText="Get monthly updates on what's happening with CSG."
              bText="Subscribe!"
              bLink={WEBLINKS.NEWSLETTER}
              optional="mt-1"
            />
            <SmallActions
              title="Donate to Our Organization!"
              pText="Donate to help us out and get a warm fuzzy feeling inside."
              bText="Donate!"
              bLink={WEBLINKS.DONATE}
              optional="mt-1"
            />
            <SmallActions
              title="Meet the Officers!"
              pText="Meet our current officers and committee members."
              bText="Learn More!"
              bLink="/officers"
              optional="mt-8"
            />
          </div>
        </div>

        {/* Desktop action strip */}
        <div className="hidden md:flex md:flex-row">
          <div className="flex w-screen flex-1 justify-around bg-bggray py-[45px]">

            {/* Subscribe */}
            <div className="ml-10 flex flex-col content-center">
              <h1 className="text-left text-3xl font-medium">Subscribe to Our Newsletter!</h1>
              <p className="max-w-[300px] pt-2 text-left text-lg text-gray-600">
                Get monthly updates on what's happening with CSG.
              </p>
              <button className="btn btn-primary mt-3 normal-case w-fit">
                <a href={WEBLINKS.NEWSLETTER}>Subscribe!</a>
              </button>
            </div>

            {/* Donate */}
            <div className="flex flex-col content-center">
              <h1 className="text-left text-3xl font-medium">Donate to Our Organization!</h1>
              <p className="max-w-[300px] pt-2 text-left text-lg text-gray-600">
                Help us provide workshops, networking opportunities, and more.
              </p>
              <button className="btn btn-primary mt-3 normal-case w-fit">
                <a href={WEBLINKS.DONATE}>Donate!</a>
              </button>
            </div>

            {/* Officers */}
            <div className="flex flex-col content-center pr-10">
              <h1 className="text-left text-3xl font-medium">Meet The Officers!</h1>
              <p className="max-w-[300px] pt-2 text-left text-lg text-gray-600">
                Meet our current officers and committee members.
              </p>
              <button className="btn btn-primary mt-3 normal-case w-fit">
                <a href="/officers">Learn More!</a>
              </button>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home