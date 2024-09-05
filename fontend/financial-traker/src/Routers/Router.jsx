import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home";
import Layout from "../Component/Layout";
import Dashbord from "../Pages/Dashbord";
import { FinancialRecordProvider } from "../contexts/financial.context";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Dashbord",
        element: (
          <FinancialRecordProvider>
            <Dashbord />
          </FinancialRecordProvider>
        ),
      },
    ],
  },
]);

export default router;
