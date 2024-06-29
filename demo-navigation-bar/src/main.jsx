import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./pages/Layout.jsx";
import About from "./components/About/About.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Home from "./components/Home/Home.jsx";
import Destinations from "./components/Destinations/Destinations.jsx";
import Contact from "./components/Contact/Contact.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-us" element={<Contact />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
