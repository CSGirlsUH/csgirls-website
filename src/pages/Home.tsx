import { useEffect, useState } from 'react'
import { gapi } from 'gapi-script'
import { parseISO } from 'date-fns'
import { useTypewriter } from 'react-simple-typewriter'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmallActions from '@/components/MobileActions'
import BigEventsCard from '@/components/BigEventsCard'
import SmallEventsCard from '@/components/SmallEventsCard'
import { WEBLINKS } from '@/components/globalVariables'

interface HomeProps {
  event?: boolean
}

// ? Integration with Google Calendar API to auto generate this list
// Google Calendar API variables

function Home({ event }: HomeProps) {
  useEffect(() => {
    if (event !== undefined && event) {
      scrollToBottom()
    }
  }, [event])

  const CLIENT_ID = process.env.REACT_APP_GAPI_CLIENT_ID
  const API_KEY = process.env.REACT_APP_GAPI_API_KEY
  const CALENDAR_ID =
    'csgirls.org_qnctmv1tm3sh26b9reci44gcf8@group.calendar.google.com'
  const [events, setEvents] = useState<any>([])
  // Waits for API fetch to complete
  const [isLoading, setIsLoading] = useState(true)

  type eventItem = {
    id: string
    title: string
    description: string
    startTime: string
    endTime: string
    date: Date
  }

  useEffect(() => {
    gapi.load('client:auth2', async () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
          ],
          scope: 'https://www.googleapis.com/auth/calendar.events',
        })
        .then(() => {
          const fetchEvents = async () => {
            const events = await getEvents(CALENDAR_ID)
            setEvents(events)
          }

          fetchEvents()
        })
    })
  }, [API_KEY, CLIENT_ID])

  const getEvents = async (calendarID: string): Promise<any[]> => {
    try {
      // Make API request to Google Calendar API
      const response = await gapi.client.calendar.events.list({
        calendarId: calendarID,
        showDeleted: false,
        maxResults: 10,
        timeMin: new Date().toISOString(),
      })

      // Return events and set Loading to false
      setIsLoading(false)
      return response.result.items
    } catch (error) {
      console.log('Failed to fetch events', error)
      setIsLoading(false)
      return []
    }
  }

  const eventItems: eventItem[] =
    events && events.length > 0
      ? events.map((event: any) => {
          return {
            id: event.id,
            title: event.summary,
            description: event.description || 'N/A',
            date: parseISO(event.start.dateTime || event.start.date),
            startTime: new Date(
              event.start.dateTime || event.start.date
            ).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
            }),
            endTime: new Date(
              event.end.dateTime || event.end.date
            ).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
            }),
          }
        })
      : []

  eventItems.sort((a: any, b: any) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })

  const [message] = useTypewriter({
    words: ['Hello World!'],
    loop: 1,
  })

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    console.log('scrolling')
  }

  return (
    <>
      <div className="mx-full my-full overflow-hidden bg-white font-poppins text-black">
        <Navbar />
        {/* Hero Section */}
        <div className="ml-10 mr-2 flex flex-row justify-center overflow-x-auto pb-5 md:mr-10 md:pb-[70px] md:pl-0 md:pt-28">
          <div className="flex flex-col md:px-5">
            {/* Title Text */}
            <div className="ml-0 pb-2 pt-5 text-left font-firacode text-2xl md:pb-5 md:text-6xl ">
              <h1 className="inline-block text-logopurple">{'>\u00A0'}</h1>
              <div className="inline-block">
                <h1 className="inline-block text-black">
                  {message}
                  <span className="text-[#663072]">_</span>
                </h1>
              </div>
            </div>
            {/* Description Text */}
            <div className="text-left text-sm md:text-xl">
              <p className="flex pb-5 md:max-w-[677px] md:pb-9">
                Founded in 2013, Computer Science Girls (CSGirls) is the first
                organization at the University of Houston that focuses on
                supporting women and their impact in the technology field
                through workshops, networking events, and tech talks. As a
                non-profit organization, we provide our members with the tools
                to further their career and create opportunities for their
                success.
              </p>

              <p className="flex pb-3 md:min-h-[82px] md:w-[659px] md:pb-[22px]">
                We believe in encouraging and supporting women as well as
                underrepresented groups, within the University of Houston, to
                pursue a successful career in technology.
              </p>
              <div>
                <button className="btn btn-primary normal-case">
                  <a href={WEBLINKS.REGISTER}>Become a member!</a>
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className=" mx-auto hidden h-[500px] w-[1200px] justify-center rounded-xl bg-purple-300 md:ml-10 md:mr-6 md:flex">
            {/* <p className=" md:flex md:items-center ">HERO IMAGE</p> */}
            <img
              src="./Photos/CSG_Meeting_Wide.jpg"
              className="mx-auto flex flex-auto rounded-xl object-cover"
            />
          </div>
        </div>
        {/* Mobile View */}
        <div className="mx-5 flex flex-row overflow-x-auto md:hidden md:overflow-hidden">
          <div className="flex flex-auto flex-row justify-around py-5 md:mx-5">
            <SmallActions
              title="Subscribe to Our Newsletter!"
              pText="Get monthly updates on what's happening with CSG."
              bText="Subscribe!"
              bLink={WEBLINKS.NEWSLETTER}
              optional="mt-1"
            />
            <SmallActions
              title="Donate to Our Organization!"
              pText="Donate to help us out and get a warm fuzzy feeling insde."
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
        {/* Desktop View */}
        <div className="hidden md:flex md:flex-row">
          <div className="flex w-screen flex-1 justify-around bg-bggray py-[45px]">
            {/* Subscribe to Our Newsletter */}
            <div className="ml-10 flex flex-col content-center">
              <h1 className="text-left text-4xl">
                Subscribe to Our Newsletter!
              </h1>
              <div>
                <p className="max-h-[121px] max-w-[370px] pt-1 text-left text-xl">
                  Get monthly updates on what's happening with CSG.
                </p>

                <button className="btn btn-primary mt-2 normal-case">
                  <a href={WEBLINKS.NEWSLETTER}>Subscribe!</a>
                </button>
              </div>
            </div>

            {/* Donate to Our Organization */}
            <div className="flex flex-col content-center">
              <h1 className="text-left text-4xl">
                Donate to Our Organization!
              </h1>
              <div>
                <p className="sm:w-[100px] max-h-[300px] pt-1 text-left text-xl md:max-w-[600px]">
                  Donate to our organization to help us provide workshops,
                  networking opportunities, and a warm fuzzy feeling inside.
                </p>

                <button className="btn btn-primary mt-2 normal-case">
                  <a href={WEBLINKS.DONATE}>Donate!</a>
                </button>
              </div>
              {/* Heart svg underneath Donate to Org */}
              <div className="absolute -my-5 mx-[130px] h-[200px] w-[200px] shrink-0">
                <img src="./icons/heart-svgrepo.svg" className=" opacity-25" />
              </div>
            </div>

            {/* Meet the Officers */}
            <div className="flex flex-col content-center pl-2 ">
              <h1 className="w-44 text-left text-4xl md:w-[370px]">
                Meet The Officers!
              </h1>
              <div>
                <p className="max-h-[121px] max-w-[370px] pt-1 text-left text-xl">
                  Meet our current officers and committee members.
                </p>

                <button className="btn btn-primary mt-1 normal-case md:mt-2">
                  <a href="/officers">Learn More!</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Variant */}
        {/* Upcoming Events Text */}
        <div className="flex flex-col md:hidden">
          <h1 className="mx-auto flex py-2 text-2xl">Upcoming Events</h1>
          {/* Events Carousel */}
          <div className="flex items-center justify-start overflow-y-hidden overflow-x-scroll md:hidden">
            <div className="flex items-center justify-start py-4">
              {!isLoading ? (
                eventItems.length > 0 && !isLoading ? (
                  <SmallEventsCard
                    optional="ml-4"
                    date={eventItems[0].date.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                    startTime={
                      eventItems[0].date.getTime() !== 0
                        ? eventItems[0].startTime
                        : 'N/A'
                    }
                    endTime={
                      eventItems[0].date.getTime() !== 0
                        ? eventItems[0].endTime
                        : 'N/A'
                    }
                    items={[eventItems[0].title]}
                  />
                ) : (
                  <div className="flex h-[190px] w-screen flex-col justify-center">
                    <h1 className="mx-auto text-center text-2xl">
                      No Upcoming Events, Check Back Soon!
                    </h1>
                  </div>
                )
              ) : (
                <div className="flex h-[194px] w-screen flex-col justify-center">
                  <span className="loading loading-dots mx-auto h-28 w-24 bg-black"></span>
                </div>
              )}
              {!isLoading && eventItems.length > 1
                ? eventItems.slice(1).map((item: eventItem, index: number) => (
                    <SmallEventsCard
                      key={index}
                      date={item.date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                      startTime={
                        item.date.getTime() !== 0 ? item.startTime : 'N/A'
                      }
                      endTime={item.date.getTime() !== 0 ? item.endTime : 'N/A'}
                      items={[item.title]}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>

        {/* Desktop Variant */}
        <div className="hidden pb-6 md:flex md:flex-col">
          <div className="flex pt-[23px]">
            <h1 className="mx-auto flex pb-1 text-4xl">Upcoming Events</h1>
          </div>
          {/* Events Carousel */}
          <div className="flex items-center justify-start overflow-y-hidden overflow-x-scroll">
            <div className="flex w-full flex-row justify-between py-4">
              {!isLoading ? (
                eventItems.length > 0 ? (
                  <BigEventsCard
                    optional="ml-6"
                    date={eventItems[0].date.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                    items={[eventItems[0].title]}
                    startTime={
                      eventItems[0].date.getTime() !== 0
                        ? eventItems[0].startTime
                        : 'N/A'
                    }
                    endTime={
                      eventItems[0].date.getTime() !== 0
                        ? eventItems[0].endTime
                        : 'N/A'
                    }
                  />
                ) : (
                  <div className="flex h-[346px] w-screen flex-col justify-center ">
                    <h1 className="mx-auto text-center text-3xl">
                      No Upcoming Events, Check Back Soon!
                    </h1>
                  </div>
                )
              ) : (
                <div className="flex h-[346px] w-screen flex-col justify-center ">
                  <span className="loading loading-dots mx-auto h-36 w-32 bg-black"></span>
                </div>
              )}
              {!isLoading
                ? eventItems.slice(1).map((item: eventItem, index: number) => (
                    <BigEventsCard
                      key={index}
                      date={item.date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                      items={[item.title]}
                      startTime={
                        item.date.getTime() !== 0 ? item.startTime : 'N/A'
                      }
                      endTime={item.date.getTime() !== 0 ? item.endTime : 'N/A'}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
