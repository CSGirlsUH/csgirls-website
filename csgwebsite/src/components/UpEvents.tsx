import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import BigCard from "./BigCard";
import SmallEventsCard from "./SmallEventsCard";

const UpEvents = () => {
  // TODO: Create integration with Google Calendar API to auto generate this list

  // Google Calendar API variables
  const CLIENT_ID =
    "53214709315-vck1iacpi8ueojlula6gq7f480a352ek.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDz3SG5Wx_AxMGtrMpRWRjfKkqEzwdzmXI";
  const CALENDAR_ID =
    "csgirls.org_qnctmv1tm3sh26b9reci44gcf8@group.calendar.google.com";
  const TESTING_CALENDAR_ID =
    "a9019437cc41150804219b9139aaa6707fe341f3432b67d96271d85d30ad29e7@group.calendar.google.com";
  const [events, setEvents] = useState([]);

  const items: [string, string[]][] = [
    ["Oct 17", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 18", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 19", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 20", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 21", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 22", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 23", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 24", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 25", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
    ["Oct 26", ["Lunch with Tim Apple", "Free T-Shirts for members!"]],
  ];

  // const eventItems =
  //   events && events.length > 0
  //     ? events.map((event) => {
  //         // Formatting date
  //         let startDate = new Date(event.start.dateTime);
  //         startDate.setHours(0, 0, 0, 0);
  //         let startDateStr = startDate.toDateString();

  //         // Formatting time
  //         let hours = startDate.getHours();
  //         let minutes = startDate.getMinutes();

  //         return {
  //           id: event.id,
  //           title: event.summary,
  //           description: event.description || "N/A",
  //           date: startDateStr,
  //           time: hours + ":" + minutes,
  //         };
  //       })
  //     : [];

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
            const events = await getEvents(TESTING_CALENDAR_ID, API_KEY);
            setEvents(events);
          };

          fetchEvents();
        });
    });
  }, []);

  const getEvents = async (
    calendarID: string,
    apiKey: string
  ): Promise<any[]> => {
    try {
      console.log("Fetching events");

      // Make API request to Google Calendar API
      const response = await gapi.client.calendar.events.list({
        calendarId: calendarID,
        showDeleted: false,
        maxResults: 25,
        // orderBy: "startTime",
      });
      console.log(new Date().toISOString());
      console.log(response);

      // Return events
      return response.result.items;
    } catch (error) {
      console.log("Failed to fetch events", error);
      return [];
    }
  };

  return (
    <>
      {
        /* GOOGLE CALENDAR API TESTING */
        // events && events.length > 0 && (
        //   <SmallEventsCard
        //     optional="ml-6"
        //     date={events[0].date}
        //     items={items[0][1]}
        //   />
        // )
        // console.log(events)
      }

      {/* Mobile Variant */}
      {/* Upcoming Events Text */}
      <div className="flex flex-col md:hidden">
        <h1 className="flex mx-auto text-2xl py-2">Upcoming Events</h1>
        {/* Events Carousel */}
        <div className="flex md:hidden items-center justify-start overflow-x-scroll overflow-y-hidden">
          {/* TESTING GOOGLE MAPS CALLS */}
          <div className="py-4 flex items-center justify-start">
            <SmallEventsCard
              optional="ml-6"
              date={items[0][0]}
              items={items[0][1]}
            />

            {items.slice(1).map((item, index) => (
              <SmallEventsCard key={index} date={item[0]} items={item[1]} />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Variant */}
      <div className="hidden md:flex md:flex-col">
        <div className="flex pt-[23px]">
          <h1 className="flex mx-auto text-4xl pb-1">Upcoming Events</h1>
        </div>
        {/* Events Carousel */}
        <div className="flex items-center justify-start overflow-x-scroll overflow-y-hidden ">
          <div className="py-4 flex items-center justify-start">
            <BigCard optional="ml-6" date={items[0][0]} items={items[0][1]} />
            {items.slice(1).map((item, index) => (
              <BigCard key={index} date={item[0]} items={item[1]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpEvents;
