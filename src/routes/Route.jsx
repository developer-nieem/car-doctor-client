
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Profille/Login";
import Register from "../Pages/Profille/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/checkout/:id',
            element: <Checkout></Checkout>,
            loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
        },
        {
            path:'/bookings',
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element: <Register></Register>
    }
  ]);


export default router;