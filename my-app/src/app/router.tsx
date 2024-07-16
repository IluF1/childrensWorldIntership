import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home/home";
import { Orders } from "@/pages/orders/orders";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/orders',
    element: <Orders/>
  }
])