import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("load-event");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  console.log({ params });
  const res = await fetch("http://localhost:8080/events/" + params.eventId);
  console.log({ res });

  if (!res.ok) {
    return json({ message: "Data not found" }, { status: 404 });
  }

  return res;
}
