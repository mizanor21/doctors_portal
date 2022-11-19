import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/layouts/Main";
import Appointment from "../../components/Pages/Appointment/Appointment";
import Dashboard from "../../components/Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Signup from "../../components/Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
])
export default router;