import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import Banner1 from '../Pages/Banner/Banner1';
import AppsDetails from '../Pages/AppsDetails/AppsDetails';
import NotFound from '../Pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index:true,
            path:"/",
            hydrateFallbackElement:<p>Loading...</p>,
            Component:Home
        },
        {
            path:"/apps",
            Component:Apps
        },
        {
            path:"/installation",
            Component:Installation
        },
        {
            path:"/app/:id",
            Component:AppsDetails
        },
        {
            path:"*",
            Component:NotFound
        },

    ]
  },
]);