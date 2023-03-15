import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import Error from "./pages/Error";
import EventDetailPage, {
  loader as singleLoaderEvents,
} from "./pages/EventDetail";
import EventsPage, { loader as loaderEvents } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";

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
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },

          { path: "new", element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
