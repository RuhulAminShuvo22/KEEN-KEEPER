import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/friend/:id", element: <FriendDetails /> },
  { path: "/timeline", element: <Timeline /> },
  { path: "/stats", element: <Stats /> },
  { path: "*", element: <NotFound /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}