import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <>about</>
            },
            {
                path: '/projects',
                element: <>projects</>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])