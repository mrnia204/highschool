import React from "react"
import { createBrowserRouter } from "react-router-dom"

import App from './App';
import HomePage from './pages/home/Home';
import AboutPage from './pages/about/About';
import Academics from "./pages/academic/Academics";
import StudentLife from "./pages/student-life/StudentLife";
import NewsEvents from "./pages/news-events/NewsEvents";
import Admissions from "./pages/admissions/Admissions";
import Contact from "./pages/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> }, 
      { path: '/about', element: <AboutPage />, },
      { path: '/academics', element: <Academics /> },
      { path: '/student-life', element: <StudentLife /> },
      { path: '/news-events', element: <NewsEvents /> }, 
      { path: '/admission', element: <Admissions /> },
      { path: '/contact', element: <Contact />}
    ]
  }
]);