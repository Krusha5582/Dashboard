import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";

import Overview from "./pages/Overview";
import ProgressTracker from "./pages/ProgressTracker";
import Documents from "./pages/Documents";
import Applications from "./pages/Applications";
import Updates from "./pages/Updates";
import Counsellor from "./pages/Counsellor";
import ProfileSettings from "./pages/ProfileSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: "progress-tracker", element: <ProgressTracker /> },
      { path: "documents", element: <Documents /> },
      { path: "applications", element: <Applications /> },
      { path: "updates", element: <Updates /> },
      { path: "counsellor", element: <Counsellor /> },
      { path: "profile-settings", element: <ProfileSettings /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
