import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from '../Authentication/Login/Login';
import SignUp from '../Authentication/SignUp/SignUp';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Category from '../Pages/Home/Category/Category';
import NewsLayout from '../Layouts/NewsLayout';
import News from '../Pages/News/News';
import About from '../Pages/Components/About/About';
import SaveNews from '../Pages/Components/SaveNews/SaveNews';
import PrivetRoute from './PrivetRoute';
import UploadNews from '../Pages/Components/UploadNews/UploadNews';
import AllUsers from '../Pages/Components/AllUsers/AllUsers';
import AdminRouter from './AdminRouter';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/category/:id",
            element: <Category></Category>,
            loader:({params})=>fetch(`https://news-hub-server-beta.vercel.app/news/${params.id}`)
          }
        ]
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/saveNews',
        element:<PrivetRoute><SaveNews></SaveNews></PrivetRoute>
      },
      {
        path:'/uploadNews',
        element:<AdminRouter><UploadNews></UploadNews></AdminRouter>
      },
      {
        path:'/allUsers',
        element:<AdminRouter><AllUsers></AllUsers></AdminRouter>
      },
      {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
          {
            path: ":id",
            element: <News></News>
          }
        ]
      },
    
      
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  }

]);