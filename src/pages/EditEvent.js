import { useRouteLoaderData } from "react-router";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("load-event");
  return <EventForm method="PATCH" event={data.event} />;
}

export default EditEventPage;
