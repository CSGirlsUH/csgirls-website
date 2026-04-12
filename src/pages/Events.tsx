import { useEffect, useState } from 'react'
import { gapi } from 'gapi-script'
import { parseISO } from 'date-fns'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type EventItem = {
  id: string
  title: string
  startTime: string
  endTime: string
  date: Date
}

function Events() {
  const CLIENT_ID = process.env.REACT_APP_GAPI_CLIENT_ID
  const API_KEY = process.env.REACT_APP_GAPI_API_KEY
  const CALENDAR_ID =
    'csgirls.org_qnctmv1tm3sh26b9reci44gcf8@group.calendar.google.com'

  const [events, setEvents] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    gapi.load('client:auth2', () => {
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
          getEvents(CALENDAR_ID).then((fetched) => setEvents(fetched))
        })
    })
  }, [API_KEY, CLIENT_ID])

  const getEvents = async (calendarID: string): Promise<any[]> => {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: calendarID,
        showDeleted: false,
        maxResults: 50,
      })
      setIsLoading(false)
      return response.result.items
    } catch (error) {
      console.log('Failed to fetch events', error)
      setIsLoading(false)
      return []
    }
  }

  const eventItems: EventItem[] =
    events && events.length > 0
      ? events.map((event: any) => ({
          id: event.id,
          title: event.summary,
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
        }))
      : []

  const getEventsForDay = (day: number) =>
    eventItems.filter(
      (e) =>
        e.date.getFullYear() === currentDate.getFullYear() &&
        e.date.getMonth() === currentDate.getMonth() &&
        e.date.getDate() === day
    )

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()

  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7
  const cells = Array.from({ length: totalCells }, (_, i) => {
    const day = i - firstDay + 1
    return day > 0 && day <= daysInMonth ? day : null
  })

  const monthName = currentDate.toLocaleString('default', { month: 'long' })
  const year = currentDate.getFullYear()
  const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const today = new Date()

  return (
    <div className="min-h-screen bg-white font-poppins text-black">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-10">

        {/* Title */}
        <h1 className="mb-6 text-center text-4xl text-logopurple md:text-5xl">
          Mark Your Calendar!
        </h1>

        {/* Month navigation */}
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
              )
            }
            className="px-3 text-2xl text-logopurple hover:opacity-60"
          >
            {'<'}
          </button>
          <div className="flex w-full items-center justify-between px-4">
            <span className="text-2xl text-logopurple opacity-60">
              {monthName}
            </span>
            <span className="text-2xl text-logopurple opacity-60">{year}</span>
          </div>
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
              )
            }
            className="px-3 text-2xl text-logopurple hover:opacity-60"
          >
            {'>'}
          </button>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex h-64 items-center justify-center">
            <span className="loading loading-dots h-28 w-24 bg-black"></span>
          </div>
        )}

        {/* Calendar */}
        {!isLoading && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-logopurple text-white">
                  {dayHeaders.map((d) => (
                    <th
                      key={d}
                      className="border border-gray-300 py-2 text-center text-sm font-medium"
                    >
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: totalCells / 7 }, (_, week) => (
                  <tr key={week}>
                    {cells.slice(week * 7, week * 7 + 7).map((day, i) => {
                      const dayEvents = day ? getEventsForDay(day) : []
                      const isToday =
                        day === today.getDate() &&
                        currentDate.getMonth() === today.getMonth() &&
                        currentDate.getFullYear() === today.getFullYear()

                      return (
                        <td
                          key={i}
                          className={`h-24 w-[14%] border border-gray-300 align-top p-1 md:h-32 md:p-2 ${
                            isToday ? 'bg-purple-50' : 'bg-white'
                          }`}
                        >
                          {day && (
                            <>
                              <span
                                className={`text-xs font-medium md:text-sm ${
                                  isToday
                                    ? 'text-logopurple font-bold'
                                    : 'text-gray-700'
                                }`}
                              >
                                {day}
                              </span>
                              <div className="mt-1 flex flex-col gap-1">
                                {dayEvents.map((event, idx) => (
                                  <div
                                    key={idx}
                                    className="rounded-md bg-logopurple px-1 py-1 text-white"
                                  >
                                    <p className="truncate text-xs font-medium leading-tight">
                                      {event.title}
                                    </p>
                                    <p className="text-xs leading-tight opacity-80">
                                      {event.startTime === event.endTime
                                        ? event.startTime
                                        : `${event.startTime} - ${event.endTime}`}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Events