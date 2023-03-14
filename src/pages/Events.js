import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  // if (data.isError) {
  //   return <h1>{data.message}</h1>;
  // }
  const eventsData = data.events;

  return <EventsList events={eventsData} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //return { isError: true, message: "Something goes wrong!!!" };
    //throw { message: "Something goes wrong!!!" };
    return json(
      { message: "Could not fetch events" },
      {
        response: 500,
      }
    );
  } else {
    return response;
  }
}
