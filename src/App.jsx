import React from "react";
import './App.css'
import Tariffs from "./pages/Tariffs.jsx";
import LightTraiff from "./pages/LightTraiff.jsx";
import {createBrowserRouter, RouterProvider, useParams} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Success from "./pages/Success.jsx";
import Detail from "./components/Detail.jsx";

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
                    path: "plans/:id",
                    element: <Detail />,
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
