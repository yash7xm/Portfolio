import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import ExpandProject from "./Components/ExpandProject.jsx";
import Error from "./Components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project/:pName",
        element: <ExpandProject />
      }
    ],
  },
]);

function AppLayout() {
  return (
    <div className="app">
      <Sidebar />
      <Outlet />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
