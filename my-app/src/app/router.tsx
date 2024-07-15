import { Home } from "@/pages/home/home";
import { createBrowserRouter } from "react-router-dom";



export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }
])