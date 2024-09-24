import {
    createBrowserRouter
    
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from '../pages/register/Register';
import News from "../pages/news/News";
import PrivetRoute from './PrivetRoute';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,

      children: [
    {
         path: "/",
         element: <Home></Home>,
         loader:()=>fetch('/news.json')
    },
    {
      path: '/news/:id',
     element:  <PrivetRoute>
      <News></News>
      </PrivetRoute>
    },

    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path:'/register',
      element: <Register></Register>
    }
      ],
    },

  ]);



export default router;