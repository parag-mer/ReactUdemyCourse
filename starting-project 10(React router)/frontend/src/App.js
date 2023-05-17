import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventDetailPage, {
  deleteEventAction,
} from "./components/EventDetailPage";
import EventsPage from "./components/EventsPage";
import EventsRoot from "./components/EventsRoot";
import HomePage from "./components/HomePage";
import NewEventPage, { NewEventAdder } from "./components/NewEventPage";
import RootLayout from "./components/Root";
import { loader } from "./components/EventsPage";
import ErrorPage from "./components/ErrorPage";
import { eventDetailLoader } from "./components/EventDetailPage";
import EditEventPage, { eventEditor } from "./components/EditEventPage";
import NewsletterPage, { newsletterAction } from "./components/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, 
            element: <EventsPage />, 
            loader: loader 
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: "edit", 
                element: <EditEventPage />, 
                action: eventEditor 
              },
            ],
          },
          { path: "new", 
            element: <NewEventPage />, 
            action: NewEventAdder 
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage/>,
        action: newsletterAction,
      },                              
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
