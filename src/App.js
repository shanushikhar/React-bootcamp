import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import Error from "./pages/Error";
import EventDetailPage, {
  loader as singleLoaderEvents,
  action as deleteEvent,
} from "./pages/EventDetail";
import EventsPage, { loader as loaderEvents } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as actionEvent } from "./components/EventForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: loaderEvents },
          {
            path: ":eventId",
            loader: singleLoaderEvents,
            id: "load-event",
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEvent,
              },
              { path: "edit", element: <EditEventPage />, action: actionEvent },
            ],
          },

          { path: "new", element: <NewEventPage />, action: actionEvent },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
