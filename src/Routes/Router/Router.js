import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import Projects from "../../Pages/Projects/Projects";

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
                element: <About></About>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])