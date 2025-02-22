import React from "react";
import './App.css'
import Tariffs from "./pages/Tariffs.jsx";
import LightTraiff from "./pages/LightTraiff.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import MediumTariff from "./pages/MediumTariff.jsx";
import PremiumTariff from "./pages/PremiumTariff.jsx";
import Success from "./pages/Success.jsx";

function App() {

    const route = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Tariffs />,
                },
                {
                    path: "/light",
                    element: <LightTraiff />,
                },
                {
                    path: "/medium",
                    element: <MediumTariff />,
                },
                {
                    path: "/premium",
                    element: <PremiumTariff />,
                },
                {
                    path: "/success-payment",
                    element: <Success />,
                },

            ]
        }
    ])


    return (
        <RouterProvider router={route}/>
    )
}

export default App
