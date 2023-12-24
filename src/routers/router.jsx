import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import ExerciseTracker from "../components/ExerciseTracker";
import FileMetadata from "../components/FileMetadata";
import RequestHeaderParser from "../components/RequestHeaderParser";
import Timestamp from "../components/Timestamp";
import UrlShortener from "../components/UrlShortener";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "exerciseTracker",
        element: <ExerciseTracker />,
      },
      {
        path: "fileMetadata",
        element: <FileMetadata />,
      },
      {
        path: "requestHeaderParser",
        element: <RequestHeaderParser />,
      },
      {
        path: "timestamp",
        element: <Timestamp />,
      },
      {
        path: "urlShortener",
        element: <UrlShortener />,
      },
    ],
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}
export default Router;
