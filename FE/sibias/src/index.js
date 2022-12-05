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
import "./styles/App.css";
import Home from "./routes/Home";
import Diskusi from "./routes/Diskusi";
import Profile from "./routes/Profile";
import Sosialisasi from "./routes/Sosialisasi";
import ErrorPage from "./routes/ErrorPage";
import TambahDiskusi from "./routes/TambahDiskusi";
import ShowDiskusi from "./routes/ShowDiskusi";
import ShowSosialisasi from "./routes/ShowSosialisasi";

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
        {
          path: "tambah_diskusi",
          element: <TambahDiskusi />,
        },
        {
          path: "show_diskusi",
          element: <ShowDiskusi />,
        },
        {
          path: "show_sosialisasi",
          element: <ShowSosialisasi />,
        },
      ],
    },
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );