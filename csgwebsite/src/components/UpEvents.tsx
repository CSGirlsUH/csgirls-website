import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import BigEventsCard from "./BigEventsCard";
import SmallEventsCard from "./SmallEventsCard";

const UpEvents = () => {
  // ? Integration with Google Calendar API to auto generate this list

  // Google Calendar API variables
  const CLIENT_ID =
    "53214709315-vck1iacpi8ueojlula6gq7f480a352ek.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDz3SG5Wx_AxMGtrMpRWRjfKkqEzwdzmXI";
  const CALENDAR_ID =
    "csgirls.org_qnctmv1tm3sh26b9reci44gcf8@group.calendar.google.com";
  // const TESTING_CALENDAR_ID = "a9019437cc41150804219b9139aaa6707fe341f3432b67d96271d85d30ad29e7@group.calendar.google.com";
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
      console.log("Fetching events");

      // Make API request to Google Calendar API
      const response = await gapi.client.calendar.events.list({
        calendarId: calendarID,
        showDeleted: false,
        maxResults: 10,
        timeMin: new Date().toISOString(),
      });
      console.log(new Date().toISOString());
      console.log(response);

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

  function sortEvents(toSort: any[]) {
    const MONTHSREV: { [key: string ]: number } = {
      "Jan" :0,
      "Feb" :1,
      "Mar" :2,
      "Apr" :3,
      "May" :4,
      "Jun" :5,
      "Jul" :6,
      "Aug" :7,
      "Sep" :8,
      "Oct" :9,
      "Nov" :10,
      "Dec" :11,
    };



  }

  if (!isLoading) console.log(events);

  const eventItems =
    events && events.length > 0
      ? events.map((event) => {
          let formattedDate = "N/A";
          let formattedTime = "N/A";
          let year = 0; 

          // If the data is in the format of a date-time, then we have to reformat
          // Gets reformatted to -> "Jan 16" and "10:00 AM"
          event.start.dateTime
            ? ((formattedDate = convertDate(event.start.dateTime, true)),
              (formattedTime = convertTime(event.start.dateTime)))
            : (formattedDate = convertDate(event.start.date));
          

          return {
            id: event.id,
            title: event.summary,
            description: event.description || "N/A",
            date: formattedDate,
            time: formattedTime,
            year: 
          };
        })
      : [];

  // eventItems.reverse();
  if (!isLoading) console.log(events[0].start.date);

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
              <p>Loading...</p>
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
        <div className="flex items-center justify-start overflow-x-scroll overflow-y-hidden ">
          <div className="py-4 flex items-center justify-start">
            {!isLoading ? (
              <BigEventsCard
                optional="ml-6"
                date={eventItems[0].date}
                items={[eventItems[0].title]}
              />
            ) : (
              <p>Loading...</p>
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
