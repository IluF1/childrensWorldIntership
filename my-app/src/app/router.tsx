import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home/home";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }
])