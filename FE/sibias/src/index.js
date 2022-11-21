import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./routes/Home";
import Diskusi from "./routes/Diskusi";
import Profile from "./routes/Profile";
import Sosialisasi from "./routes/Sosialisasi";
import ErrorPage from "./routes/ErrorPage";

const AppLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "diskusi",
          element: <Diskusi />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "sosialisasi",
          element: <Sosialisasi />,
        },
      ],
    },
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );