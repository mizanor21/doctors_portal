import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/layouts/Main";
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
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])
export default router;