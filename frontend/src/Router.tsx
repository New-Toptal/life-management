import React, { useState, useEffect } from "react";
import { useRoutes, RouteObject, Navigate } from "react-router-dom";
import Layout from "./layout/index";
import Home from "./pages/Home";

export default function Router() {
  const router = [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    // {
    //   path: '/login',
    //   element: <SignIn />
    // },
    // {
    //   path: '/forgotpassword',
    //   element: <ForgetPassword/>
    // },
    // {
    //   path: '/',
    //   element: <SignIn />
    // }
  ];
  return useRoutes(router);
}
