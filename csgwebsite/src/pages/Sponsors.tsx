import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { useState, useEffect } from 'react'
import { SPONSORS } from '../components/globalVariables'
import { PARTNERS } from '../components/globalVariables'

const Sponsors = () => {
  // Check the sections that need to be displayed
  const [platinum, setPlatinum] = useState(false)
  const [gold, setGold] = useState(false)
  const [silver, setSilver] = useState(false)
  const [bronze, setBronze] = useState(false)
  const [partners, setPartners] = useState(false)

  // useEffect hook to update the states based on the sponsors
  useEffect(() => {
    SPONSORS.forEach((sponsor) => {
      switch (sponsor.rank) {
        case 'Platinum':
          setPlatinum(true)
          break
        case 'Gold':
          setGold(true)
          break
        case 'Silver':
          setSilver(true)
          break
        case 'Bronze':
          setBronze(true)
          break
        default:
          break
      }
    })

    if (PARTNERS.length > 0) {
      setPartners(true)
    }
  }, []) // The empty dependency array ensures this only runs once after the initial render

  return (
    <>
      {/* Desktop View */}
      <div className="mx-auto my-auto hidden bg-white font-poppins text-black md:visible md:flex">
        {/* Content for page */}
        <div className="min-h-screen bg-white">
          <Navbar />
          <h1 className="mx-auto py-16 text-center text-5xl">
            Special Thanks to All of Our 2025 Sponsors!
          </h1>
          {/* Sponsor List */}
          <div className="max-h-auto mx-auto flex flex-col text-center text-4xl">
            {/* Our Platinum Sponsors */}
            {platinum && (
              <div className="flex flex-col justify-center gap-3">
                <div className="flex flex-row justify-center gap-3">
                  <img
                    src="/icons/platinum_val.png"
                    alt="Platinum Icon"
                    className="max-h-10 max-w-10"
                  />
                  <h1 className="">Platinum Sponsors</h1>
                  <img
                    src="/icons/platinum_val.png"
                    alt="Platinum Icon"
                    className="max-h-10 max-w-10"
                  />
                </div>
                {/* Sponsor Platinum Logo Section */}
                <div className="mb-8 flex h-[200px] w-full justify-center bg-sponsorplatinum"></div>
              </div>
            )}
            {/* Our Gold Sponsors */}
            {gold && (
              <div className="flex flex-col justify-center gap-3">
                <div className="flex flex-row justify-center gap-3">
                  <img
                    src="/icons/gold_val.png"
                    alt="Gold Icon"
                    className="max-h-10 max-w-10"
                  />
                  <h1 className="">Gold Sponsors</h1>
                  <img
                    src="/icons/gold_val.png"
                    alt="Gold Icon"
                    className="max-h-10 max-w-10"
                  />
                </div>
                {/* Sponsor Gold Logo Section */}
                <div className="mb-8 flex h-[200px] w-full justify-center bg-sponsorgold"></div>
              </div>
            )}
            {/* Our Silver Sponsors */}
            {silver && (
              <div className="flex flex-col justify-center gap-3">
                <div className="flex flex-row justify-center gap-3">
                  <img
                    src="/icons/silver_val.png"
                    alt="Silver Icon"
                    className="max-h-10 max-w-10"
                  />
                  <h1 className="">Silver Sponsors</h1>
                  <img
                    src="/icons/silver_val.png"
                    alt="Silver Icon"
                    className="max-h-10 max-w-10"
                  />
                </div>
                {/* Sponsor Silver Logo Section */}
                <div className="mb-8 flex h-[200px] w-full justify-center bg-sponsorsilver"></div>
              </div>
            )}
            {/* Our Bronze Sponsors */}
            {bronze && (
              <div className="flex flex-col justify-center gap-3">
                <div className="flex flex-row justify-center gap-3">
                  <img
                    src="/icons/bronze_val.png"
                    alt="Bronze Icon"
                    className="max-h-10 max-w-10"
                  />
                  <h1 className="">Bronze Sponsors</h1>
                  <img
                    src="/icons/bronze_val.png"
                    alt="Bronze Icon"
                    className="max-h-10 max-w-10"
                  />
                </div>
                {/* Bronze Logo Section */}
                <div className="mb-8 flex h-[200px] w-full justify-center bg-sponsorbronze"></div>
              </div>
            )}
            {/* Partners Section */}
            {partners && (
              <div>
                <h1 className="pb-2">Thanks to All of Our Partners!</h1>
                {/* Partner Name Section */}
                <div className="mx-60 flex max-h-[20rem] flex-col self-center rounded-xl bg-[#E8E9FF] py-10">
                  <div className="flex h-full w-1/2 flex-col flex-wrap gap-5 self-center text-center">
                    {PARTNERS.map((partner, index) => (
                      <h1 key={index} className="text-3xl">
                        {partner.name}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Jobs Combobox Dropdown Menu */}
            <div className="">
              <h1 className="pt-10 text-center text-2xl">
                Want a Job Working for One of Our Sponsors?
              </h1>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex bg-white font-poppins text-black md:hidden">
        <div className="flex w-full flex-col text-center">
          <Navbar />
          <h1 className="py-4 text-center text-xl">
            Special Thanks to All of Our 2025 Sponsors!
          </h1>
          <div className="flex flex-col">
            {/* Platinum Sponsors */}
            {platinum && (
              <div className="flex flex-col">
                <div className="flex flex-row justify-center gap-3 pb-2">
                  <img
                    src="/icons/platinum_val.png"
                    alt="Platinum Icon"
                    className="max-h-10 max-w-10"
                  />
                  <h1 className="flex self-center">Platinum Sponsors</h1>
                  <img
                    src="/icons/platinum_val.png"
                    alt="Platinum Icon"
                    className="max-h-10 max-w-10"
                  />
                </div>
                <div className="mb-8 flex h-[200px] w-full justify-center bg-sponsorplatinum"></div>
              </div>
            )}
            {/* Gold Sponsors */}
            {gold && (
              <div className="flex flex-col">
                <div className="flex flex-row justify-center gap-3 pb-2">
                  <img
                    src="/icons/gold_val.png"
                    alt="Gold Icon"
                    className="max-h-10 max-w-10"
                  />
                  <h1 className="flex self-center">Gold Sponsors</h1>
                  <img
                    src="/icons/gold_val.png"
                    alt="Gold Icon"
                    className="max-h-10 max-w-10"
                  />
                </div>
                <div className="mb-8 flex h-[200px] w-full justify-center bg-sponsorgold"></div>
              </div>
            )}
            {/* Silver Sponsors */}
            {silver && (
              <div className="flex flex-col">
                <div className="flex flex-row justify-center gap-3 pb-2">
                  <img
                    src="/icons/silver_val.png"
                    alt="Silver Icon"
                    className="max-h-10 max-w-10"
                  />
                  <h1 className="flex self-center">Silver Sponsors</h1>
                  <img
                    src="/icons/silver_val.png"
                    alt="Silver Icon"
                    className="max-h-10 max-w-10"
                  />
                </div>
                <div className="mb-8 flex h-[200px] w-full justify-center bg-sponsorsilver"></div>
              </div>
            )}
            {/* Bronze Sponsors */}
            {bronze && (
              <div className="flex flex-col">
                <div className="flex flex-row justify-center gap-3 pb-2">
                  <img
                    src="/icons/bronze_val.png"
                    alt="Bronze Icon"
                    className="max-h-10 max-w-10"
                  />
                  <h1 className="flex self-center">Bronze Sponsors</h1>
                  <img
                    src="/icons/bronze_val.png"
                    alt="Bronze Icon"
                    className="max-h-10 max-w-10"
                  />
                </div>
                <div className="mb-8 flex h-[200px] w-full justify-center bg-sponsorbronze"></div>
              </div>
            )}
            {/* Partners Section */}
            {partners && (
              <div>
                <h1 className="pb-2">Thanks to All of Our Partners!</h1>
                <div className="max-w-screen mx-10 flex flex-col self-center rounded-xl bg-[#E8E9FF] py-10">
                  <div className="flex h-full w-1/2 flex-col flex-wrap gap-5 self-center text-center">
                    {PARTNERS.map((partner, index) => (
                      <h1 key={index} className="text-xl">
                        {partner.name}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Jobs Combobox Dropdown Menu */}
            <div className="">
              <h1 className="pt-10 text-center text-2xl">
                Want a Job Working for One of Our Sponsors?
              </h1>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Sponsors
