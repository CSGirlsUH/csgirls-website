import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import BigEventsCard from "./BigEventsCard";
import SmallEventsCard from "./SmallEventsCard";

const UpEvents = () => {
  // ? Integration with Google Calendar API to auto generate this list

  // Google Calendar API variables
  const CLIENT_ID = process.env.REACT_APP_GAPI_CLIENT_ID;
  const API_KEY = process.env.REACT_APP_GAPI_API_KEY;
  const CALENDAR_ID =
    "csgirls.org_qnctmv1tm3sh26b9reci44gcf8@group.calendar.google.com";
  const [events, setEvents] = useState<any>([]);
  // Waits for API fetch to complete
  const [isLoading, setIsLoading] = useState(true);

  type eventItem = {
    id: string;
    title: string;
    description: string;
    date: Date;
  };

  useEffect(() => {
    gapi.load("client:auth2", async () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
          scope: "https://www.googleapis.com/auth/calendar.events",
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
      console.log("Failed to fetch events", error);
      setIsLoading(false);
      return [];
    }
  };

  function convertTime(dateTime: string) {
    const date = new Date(dateTime);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const dayPeriod = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    // Convert '0' to '12'
    hours = hours ? hours : 12;
    // Add leading zero to single digit minutes
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    // ? If the API returns a date-time format (dateTime: '2024-01-16T10:00:00-06:00')
    // ? convert it into a string of time with AM/PM here

    return `${hours}:${formattedMinutes} ${dayPeriod}`;
  }

  // function convertDate(dateTime: string, isDateTime = false) {
  //   const MONTHS: { [key: number]: string } = {
  //     0: "Jan",
  //     1: "Feb",
  //     2: "Mar",
  //     3: "Apr",
  //     4: "May",
  //     5: "June",
  //     6: "July",
  //     7: "Aug",
  //     8: "Sept",
  //     9: "Oct",
  //     10: "Nov",
  //     11: "Dec",
  //   };

  //   // ? If the API returns a date-time format (dateTime: '2024-01-16T10:00:00-06:00')
  //   // ? convert it into a string of month and day here
  //   if (isDateTime) {
  //     const date = new Date(dateTime);
  //     let month = MONTHS[date.getMonth()];
  //     let day = date.getDate();

  //     return `${month} ${day}`;
  //   }

  //   // ? If the API returns a date format (date: '2024-01-16')
  //   // ? convert it into a string of month and day here
  //   let slicedDate = dateTime.split("-");
  //   let month = MONTHS[parseInt(slicedDate[1]) - 1];
  //   let day = parseInt(slicedDate[2]);

  //   return `${month} ${day}`;
  // }

  // function convertYear(date: string | Date): number {
  //   let year = 0;
  //   if (typeof date === "string") {
  //     let slicedDate = date.split("-");
  //     year = parseInt(slicedDate[0]);

  //     return year;
  //   }
  //   if (date instanceof Date) year = date.getFullYear();
  //   return year;
  // }

  // function sort(toSort: any[]) {
  //   const MONTHS: { [key: string]: number } = {
  //     Jan: 0,
  //     Feb: 1,
  //     Mar: 2,
  //     Apr: 3,
  //     May: 4,
  //     Jun: 5,
  //     Jul: 6,
  //     Aug: 7,
  //     Sep: 8,
  //     Oct: 9,
  //     Nov: 10,
  //     Dec: 11,
  //   };
  //   return toSort.sort((a, b) => {
  //     if (a.year < b.year) return -1;
  //     else if (a.year > b.year) return 1;
  //     else if (a.year == b.year) {
  //       // If years are the same compare months
  //       if (MONTHS[a.date.slice(0, 3)] < MONTHS[b.date.slice(0, 3)]) return -1;
  //       else if (MONTHS[a.date.slice(0, 3)] > MONTHS[b.date.slice(0, 3)])
  //         return 1;
  //       else if (MONTHS[a.date.slice(0, 3)] == MONTHS[b.date.slice(0, 3)]) {
  //         // If months are the same compare days
  //         if (parseInt(a.date.slice(4)) < parseInt(b.date.slice(4))) return -1;
  //         else if (parseInt(a.date.slice(4)) > parseInt(b.date.slice(4)))
  //           return 1;
  //       }
  //     }
  //     return 0;
  //   });
  // }

  const eventItems: eventItem[] =
    events && events.length > 0
      ? events.map((event: any) => {
          return {
            id: event.id,
            title: event.summary,
            description: event.description || "N/A",
            date: new Date(event.start.dateTime || event.start.date),
          };
        })
      : [];

  eventItems.sort((a: any, b: any) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  console.log(eventItems);

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
              <SmallEventsCard
                optional="ml-4"
                date={eventItems[0].date.toLocaleDateString("en-US", {
                  month: "short",

                  day: "numeric",
                })}
                items={[eventItems[0].title]}
              />
            ) : (
              <div className="flex h-[194px] w-screen flex-col justify-center">
                <span className="loading loading-dots mx-auto h-28 w-24 bg-black"></span>
              </div>
            )}
            {!isLoading
              ? eventItems.slice(1).map((item: eventItem, index: number) => (
                  <SmallEventsCard
                    key={index}
                    date={item.date.toLocaleDateString("en-US", {
                      month: "short",

                      day: "numeric",
                    })}
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
          <div className="flex justify-between py-4">
            {!isLoading ? (
              <BigEventsCard
                optional="ml-6"
                date={eventItems[0].date.toLocaleDateString("en-US", {
                  month: "short",

                  day: "numeric",
                })}
                items={[eventItems[0].title]}
              />
            ) : (
              <div className="flex h-[346px] w-screen flex-col justify-center ">
                <span className="loading loading-dots mx-auto h-36 w-32 bg-black"></span>
              </div>
            )}
            {!isLoading
              ? eventItems.slice(1).map((item: eventItem, index: number) => (
                  <BigEventsCard
                    key={index}
                    date={item.date.toLocaleDateString("en-US", {
                      month: "short",

                      day: "numeric",
                    })}
                    items={[item.title]}
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
