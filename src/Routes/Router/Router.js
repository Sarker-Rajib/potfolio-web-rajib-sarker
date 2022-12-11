import { createBrowserRouter } from "react-router-dom";
import DetailedProject from "../../Components/MyProjects/DetailedProject";
import Main from "../../Layouts/Main/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/About/Blog";
import ContactMe from "../../Pages/ContactMe/ContactMe";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import Projects from "../../Pages/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/projects/:id',
                loader: ({ params }) => fetch(`https://portfolio-nine-cyan-14.vercel.app/projects?id=${params.id}`),
                element: <DetailedProject></DetailedProject>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <ContactMe></ContactMe>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])