import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/layouts/Main";
import Appointment from "../../components/Pages/Appointment/Appointment";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";

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
            }
        ]
    }
])
export default router;