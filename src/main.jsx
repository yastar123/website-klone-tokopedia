import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./page/login";
import Error from "./page/error";
import "./index.css";
import Register from "./page/register";
import Home from "./page/home";
import Product from "./page/productCard/productCard";
import Buy from "./page/buy/buy";
import Show from "./page/show";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/home/:id",
    element: <Product />,
    errorElement: <Error />,
  },
  {
    path: "/buy",
    element: <Buy />,
    errorElement: <Error />,
  },
  {
    path: "/show",
    element: <Show />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
