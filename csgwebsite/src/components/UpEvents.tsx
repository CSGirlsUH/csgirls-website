import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { parseISO } from 'date-fns';
import BigEventsCard from './BigEventsCard';
import SmallEventsCard from './SmallEventsCard';

const UpEvents = () => {
  // ? Integration with Google Calendar API to auto generate this list

  // Google Calendar API variables
  const CLIENT_ID = process.env.REACT_APP_GAPI_CLIENT_ID;
  const API_KEY = process.env.REACT_APP_GAPI_API_KEY;
  const CALENDAR_ID =
    'csgirls.org_qnctmv1tm3sh26b9reci44gcf8@group.calendar.google.com';
  const [events, setEvents] = useState<any>([]);
  // Waits for API fetch to complete
  const [isLoading, setIsLoading] = useState(true);

  type eventItem = {
    id: string;
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    date: Date;
  };

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
            const events = await getEvents(CALENDAR_ID);
            setEvents(events);
          };

          fetchEvents();
        });
    });
  }, []);

  const getEvents = async (calendarID: string): Promise<any[]> => {
    try {
      // Make API request to Google Calendar API
      const response = await gapi.client.calendar.events.list({
        calendarId: calendarID,
        showDeleted: false,
        maxResults: 10,
        timeMin: new Date().toISOString(),
      });

      // Return events and set Loading to false
      setIsLoading(false);
      return response.result.items;
    } catch (error) {
      console.log('Failed to fetch events', error);
      setIsLoading(false);
      return [];
    }
  };

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
          };
        })
      : [];

  eventItems.sort((a: any, b: any) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <>
      {/* Mobile Variant */}
      {/* Upcoming Events Text */}
      <div className="flex flex-col md:hidden">
        <h1 className="mx-auto flex py-2 text-2xl">Upcoming Events</h1>
        {/* Events Carousel */}
        <div className="flex items-center justify-start overflow-y-hidden overflow-x-scroll md:hidden">
          {/* TESTING GOOGLE MAPS CALLS */}
          <div className="flex items-center justify-start py-4">
            {!isLoading ? (
              false ? (
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
            {!isLoading
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
    </>
  );
};

export default UpEvents;
