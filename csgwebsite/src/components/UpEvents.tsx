import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import BigEventsCard from "./BigEventsCard";
import SmallEventsCard from "./SmallEventsCard";

const UpEvents = () => {
  // ? Integration with Google Calendar API to auto generate this list

  // Google Calendar API variables
  // const TESTING_CLIENT_ID =
  //   "53214709315-vck1iacpi8ueojlula6gq7f480a352ek.apps.googleusercontent.com";
  // const TESTING_API_KEY = "AIzaSyDz3SG5Wx_AxMGtrMpRWRjfKkqEzwdzmXI";
  const CLIENT_ID =
    "53214709315-mmp03qqkg4b6h00o618voigc8rko5lb5.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDz3SG5Wx_AxMGtrMpRWRjfKkqEzwdzmXI";
  const CALENDAR_ID =
    "csgirls.org_qnctmv1tm3sh26b9reci44gcf8@group.calendar.google.com";
  const [events, setEvents] = useState([]);
  // Waits for API fetch to complete
  const [isLoading, setIsLoading] = useState(true);

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

  function convertDate(dateTime: string, isDateTime = false) {
    const MONTHS: { [key: number]: string } = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "June",
      6: "July",
      7: "Aug",
      8: "Sept",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };

    // ? If the API returns a date-time format (dateTime: '2024-01-16T10:00:00-06:00')
    // ? convert it into a string of month and day here
    if (isDateTime) {
      const date = new Date(dateTime);
      let month = MONTHS[date.getMonth()];
      let day = date.getDate();

      return `${month} ${day}`;
    }

    // ? If the API returns a date format (date: '2024-01-16')
    // ? convert it into a string of month and day here
    let slicedDate = dateTime.split("-");
    let month = MONTHS[parseInt(slicedDate[1]) - 1];
    let day = parseInt(slicedDate[2]);

    return `${month} ${day}`;
  }

  function convertYear(date: string | Date): number {
    let year = 0;
    if (typeof date === "string") {
      let slicedDate = date.split("-");
      year = parseInt(slicedDate[0]);

      return year;
    }
    if (date instanceof Date) year = date.getFullYear();
    return year;
  }

  function sort(toSort: any[]) {
    const MONTHS: { [key: string]: number } = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
    return toSort.sort((a, b) => {
      if (a.year < b.year) return -1;
      else if (a.year > b.year) return 1;
      else if (a.year == b.year) {
        // If years are the same compare months
        if (MONTHS[a.date.slice(0, 3)] < MONTHS[b.date.slice(0, 3)]) return -1;
        else if (MONTHS[a.date.slice(0, 3)] > MONTHS[b.date.slice(0, 3)])
          return 1;
        else if (MONTHS[a.date.slice(0, 3)] == MONTHS[b.date.slice(0, 3)]) {
          // If months are the same compare days
          if (parseInt(a.date.slice(4)) < parseInt(b.date.slice(4))) return -1;
          else if (parseInt(a.date.slice(4)) > parseInt(b.date.slice(4)))
            return 1;
        }
      }
      return 0;
    });
  }

  const eventItems =
    events && events.length > 0
      ? events.map((event) => {
          let formattedDate = "N/A";
          let formattedTime = "N/A";
          let formattedYear = 0;

          // If the data is in the format of a date-time, then we have to reformat
          // Gets reformatted to -> "Jan 16" and "10:00 AM"
          event.start.dateTime
            ? ((formattedDate = convertDate(event.start.dateTime, true)),
              (formattedTime = convertTime(event.start.dateTime)),
              (formattedYear = convertYear(new Date(event.start.dateTime))))
            : ((formattedDate = convertDate(event.start.date)),
              (formattedYear = convertYear(event.start.date)));

          return {
            id: event.id,
            title: event.summary,
            description: event.description || "N/A",
            date: formattedDate,
            time: formattedTime,
            year: formattedYear,
          };
        })
      : [];

  sort(eventItems);

  return (
    <>
      {/* Mobile Variant */}
      {/* Upcoming Events Text */}
      <div className="flex flex-col md:hidden">
        <h1 className="flex mx-auto text-2xl py-2">Upcoming Events</h1>
        {/* Events Carousel */}
        <div className="flex md:hidden items-center justify-start overflow-x-scroll overflow-y-hidden">
          {/* TESTING GOOGLE MAPS CALLS */}
          <div className="py-4 flex items-center justify-start">
            {!isLoading ? (
              <SmallEventsCard
                optional="ml-6"
                date={eventItems[0].date}
                items={[eventItems[0].title]}
              />
            ) : (
              <div className="flex flex-col justify-center w-screen h-[194px]">
                <span className="mx-auto loading loading-dots bg-black w-24 h-28"></span>
              </div>
            )}
            {!isLoading
              ? eventItems
                  .slice(1)
                  .map((item, index) => (
                    <SmallEventsCard
                      key={index}
                      date={item.date}
                      items={[item.title]}
                    />
                  ))
              : null}
          </div>
        </div>
      </div>

      {/* Desktop Variant */}
      <div className="hidden md:flex md:flex-col">
        <div className="flex pt-[23px]">
          <h1 className="flex mx-auto text-4xl pb-1">Upcoming Events</h1>
        </div>
        {/* Events Carousel */}
        <div className="flex items-center justify-start overflow-x-scroll overflow-y-hidden">
          <div className="py-4 flex items-center justify-start">
            {!isLoading ? (
              <BigEventsCard
                optional="ml-6"
                date={eventItems[0].date}
                items={[eventItems[0].title]}
              />
            ) : (
              <div className="flex flex-col justify-center w-screen h-[346px] ">
                <span className="mx-auto loading loading-dots bg-black w-32 h-36"></span>
              </div>
            )}
            {!isLoading
              ? eventItems
                  .slice(1)
                  .map((item, index) => (
                    <BigEventsCard
                      key={index}
                      date={item.date}
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
