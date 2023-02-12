import React, { useState, useEffect } from "react";
import { useRoutes, RouteObject, Navigate } from "react-router-dom";
import Layout from "./layout/index";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/LoginIn";

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
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/login',
      element: <Login />
    },
  ];
  return useRoutes(router);
}
