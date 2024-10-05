import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../../src/components/ui/command.tsx'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { useState, useEffect } from 'react'
import { SPONSORS } from '../components/globalVariables'
import { PARTNERS } from '../components/globalVariables'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'

// Function to find the sponsor that matches the name
function matchingSponsor(s: string) {
  return SPONSORS.find((sponsor) => sponsor.name === s)
}

// Function to find the sponsors that match the rank
function matchingRank(r: string) {
  return SPONSORS.filter((sponsor) => sponsor.rank === r)
}

const Sponsors = () => {
  // Check the sections that need to be displayed
  const [platinum, setPlatinum] = useState(false)
  const [gold, setGold] = useState(false)
  const [silver, setSilver] = useState(false)
  const [bronze, setBronze] = useState(false)
  const [partners, setPartners] = useState(false)

  // Combobox variables
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [openM, setOpenM] = useState(false)

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
  }, [])

  return (
    <>
      {/* Desktop View */}
      <div className="mx-auto my-auto hidden w-full bg-white font-poppins text-black md:visible md:flex">
        {/* Content for page */}
        <div className="min-h-screen min-w-full bg-white">
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
                <div className="mb-8 flex h-auto min-h-[200px] w-full flex-row flex-wrap items-center justify-center gap-10 bg-sponsorplatinum">
                  {matchingRank('Platinum').map((sponsor, index) => (
                    <a href={sponsor.link} key={index}>
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-auto w-64"
                      />
                    </a>
                  ))}
                </div>
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
                <div className="mb-8 flex h-auto min-h-[200px] w-full flex-row flex-wrap items-center justify-center gap-10 bg-sponsorgold">
                  {matchingRank('Gold').map((sponsor, index) => (
                    <a href={sponsor.link} key={index}>
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-auto w-64"
                      />
                    </a>
                  ))}
                </div>
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
                <div className="mb-8 flex h-auto min-h-[200px] w-full flex-row flex-wrap items-center justify-center gap-10 bg-sponsorsilver">
                  {matchingRank('Silver').map((sponsor, index) => (
                    <a href={sponsor.link} key={index}>
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-auto w-64"
                      />
                    </a>
                  ))}
                </div>
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
                <div className="mb-8 flex h-auto min-h-[200px] w-full flex-row flex-wrap items-center justify-center gap-10 bg-sponsorbronze">
                  {matchingRank('Bronze').map((sponsor, index) => (
                    <a href={sponsor.link} key={index}>
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-auto w-64"
                      />
                    </a>
                  ))}
                </div>
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
            <div className="pb-10">
              <h1 className="pt-10 text-center text-2xl">
                Want a Job Working for One of Our Sponsors?
              </h1>
              {/* Jobs Combobox Dropdown Menu */}
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                  >
                    {value
                      ? SPONSORS.find((sponsor) => sponsor.name === value)?.name
                      : 'Select Sponsor...'}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search Sponsors..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>Sponsor not found.</CommandEmpty>
                      <CommandGroup>
                        {SPONSORS.map((sponsor) => (
                          <CommandItem
                            key={sponsor.name}
                            value={sponsor.name}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? '' : currentValue
                              )
                              setOpen(false)
                            }}
                          >
                            {sponsor.name}
                            <CheckIcon
                              className={cn(
                                'ml-auto h-4 w-4',
                                value === sponsor.name
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {value == '' ? (
                <button className="btn btn-disabled my-1 ml-6 mt-1 normal-case">
                  See Opportunities
                </button>
              ) : (
                <a href={matchingSponsor(value)?.link || '#'}>
                  <button className="btn btn-primary my-1 ml-6 mt-1 normal-case">
                    See Opportunities
                  </button>
                </a>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex bg-white font-poppins text-black md:hidden">
        <div className="flex w-full flex-col text-center">
          <Navbar />
          <h1 className="py-5 text-center text-lg">
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
                    className="h-auto w-10"
                  />
                  <h1 className="flex self-center">Platinum Sponsors</h1>
                  <img
                    src="/icons/platinum_val.png"
                    alt="Platinum Icon"
                    className="max-h-10 max-w-10"
                  />
                </div>
                <div className="mb-8 flex h-auto min-h-[150px] w-full flex-row flex-wrap items-center justify-center gap-10 bg-sponsorplatinum">
                  {matchingRank('Platinum').map((sponsor, index) => (
                    <a href={sponsor.link} key={index}>
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-auto w-32"
                      />
                    </a>
                  ))}
                </div>
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
                <div className="mb-8 flex h-auto min-h-[150px] w-full flex-row flex-wrap items-center justify-center gap-10 bg-sponsorgold">
                  {matchingRank('Gold').map((sponsor, index) => (
                    <a href={sponsor.link} key={index}>
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-auto w-32"
                      />
                    </a>
                  ))}
                </div>
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
                <div className="mb-8 flex h-auto min-h-[150px] w-full flex-row flex-wrap items-center justify-center gap-10 bg-sponsorsilver">
                  {matchingRank('Silver').map((sponsor, index) => (
                    <a href={sponsor.link} key={index}>
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-auto w-32"
                      />
                    </a>
                  ))}
                </div>
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
                <div className="mb-8 flex h-auto min-h-[150px] w-full flex-row flex-wrap items-center justify-center gap-10 bg-sponsorbronze">
                  {matchingRank('Bronze').map((sponsor, index) => (
                    <a href={sponsor.link} key={index}>
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-auto w-32"
                      />
                    </a>
                  ))}
                </div>
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
            <div className="mx-2 flex flex-shrink flex-col pb-10">
              <h1 className="pt-10 text-center text-lg">
                Want a Job Working for One of Our Sponsors?
              </h1>
              {/* Jobs Combobox Dropdown Menu */}
              <Popover open={openM} onOpenChange={setOpenM}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openM}
                    className="w-full justify-between"
                  >
                    {value
                      ? SPONSORS.find((sponsor) => sponsor.name === value)?.name
                      : 'Select Sponsor...'}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search Sponsors..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>Sponsor not found.</CommandEmpty>
                      <CommandGroup>
                        {SPONSORS.map((sponsor) => (
                          <CommandItem
                            key={sponsor.name}
                            value={sponsor.name}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? '' : currentValue
                              )
                              setOpenM(false)
                            }}
                          >
                            {sponsor.name}
                            <CheckIcon
                              className={cn(
                                'ml-auto h-4 w-4',
                                value === sponsor.name
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {value == '' ? (
                <button className="btn btn-disabled my-2 w-full normal-case">
                  See Opportunities
                </button>
              ) : (
                <a href={matchingSponsor(value)?.link || '#'}>
                  <button className="btn btn-primary my-2 w-full normal-case">
                    See Opportunities
                  </button>
                </a>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Sponsors
