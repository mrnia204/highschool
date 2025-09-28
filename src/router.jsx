import React from "react"
import { createBrowserRouter } from "react-router-dom"

import App from './App';
import HomePage from './pages/home/Home';
import AboutPage from './pages/about/About';
import Academics from "./pages/academic/Academics";
import StudentLife from "./pages/student-life/StudentLife";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        index: true,
        element: <HomePage />
      }, 
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/academics',
        element: <Academics />
      },
      {
        path: '/student-life',
        element: <StudentLife />
      }

    ]
  }
]);