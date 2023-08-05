import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from '../Authentication/Login/Login';
import SignUp from '../Authentication/SignUp/SignUp';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';

export const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
      ]
    },
    {
      path:"/login",
      element:<Login></Login>
    },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      }
    
  ]);