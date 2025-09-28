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

import { useState } from 'react'
import { SPONSORS } from '../components/globalVariables'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'

// Function to find the sponsor that matches the name
function matchingSponsor(s: string) {
  return SPONSORS.find((sponsor) => sponsor.name === s)
}

const Sponsors = () => {
  // Combobox variables
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [openM, setOpenM] = useState(false)

  return (
    <>
      {/* Desktop View */}
      <div className="mx-auto my-auto hidden w-full bg-white font-poppins text-black md:visible md:flex">
        <div className="min-h-screen min-w-full bg-white">
          <Navbar />
          <h1 className="mx-auto py-16 text-center text-5xl">
            Special Thanks to All of Our 2025 Sponsors!
          </h1>

          {/* Sponsors Section */}
          <div className="mb-8 flex h-auto w-full flex-row flex-wrap items-center justify-center gap-10">
            {SPONSORS.map((sponsor, index) => (
              <a
                href={sponsor.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-auto w-64"
                />
              </a>
            ))}
          </div>

          {/* Jobs Combobox Dropdown Menu */}
          <div className="pb-10">
            <h1 className="pt-10 text-center text-2xl">
              Want a Job Working for One of Our Sponsors?
            </h1>
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

          {/* Sponsors Section */}
          <div className="mb-8 flex h-auto w-full flex-row flex-wrap items-center justify-center gap-10">
            {SPONSORS.map((sponsor, index) => (
              <a
                href={sponsor.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-auto w-32"
                />
              </a>
            ))}
          </div>

          {/* Jobs Combobox Dropdown Menu */}
          <div className="mx-2 flex flex-shrink flex-col pb-10">
            <h1 className="pt-10 text-center text-lg">
              Want a Job Working for One of Our Sponsors?
            </h1>
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
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Sponsors
