import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/styles/index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
