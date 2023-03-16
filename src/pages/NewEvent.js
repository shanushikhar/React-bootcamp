import { json, redirect } from "react-router";
import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm method="POST" />;
}

export default NewEventPage;

// export async function action({ request, params }) {
//   const dataFromForm = await request.formData();
//   const eventData = {
//     title: dataFromForm.get("title"),
//     image: dataFromForm.get("image"),
//     date: dataFromForm.get("date"),
//     description: dataFromForm.get("description"),
//   };
//   console.log({ eventData });
//   const res = await fetch("http://localhost:8080/events", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(eventData),
//   });
//   console.log({ res });
//   if (!res.ok) {
//     throw json(
//       {
//         message: "Could not submit the req",
//       },
//       { status: 403 }
//     );
//   }

//   return redirect("/events");
// }
