import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Layout from "./pages/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Courses from "./components/Courses/Courses.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "./helper/ThemeContext.jsx";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);
