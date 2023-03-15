import { json, redirect, useRouteLoaderData } from "react-router-dom";
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

export async function action({ request, params }) {
  const res = await fetch("http://localhost:8080/events/" + params.eventId, {
    method: request.method,
  });
  console.log({ res }, res.json());
  if (!res.ok) {
    throw json({ message: "Event Cant delete" }, { status: 403 });
  }

  return redirect("/events");
}
