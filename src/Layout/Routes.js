import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import BookDetails from "../Components/BookDetails/BookDetails";
import Books from "../Components/Books/Books";
import Course from "../Components/Course/Course";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Galary from "../Components/Galary/Galary";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
import Services from "../Components/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: async () => fetch('https://api.itbook.store/1.0/new'),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/books', element: <Books></Books> },
            { path: '/course', element: <Course></Course> },
            { path: '/galary', element: <Galary></Galary> },
            { path: '/services', element: <Services></Services> },
            { path: '/about', element: <About></About> },
            {
                path: '/book-Details/:id',
                loader: async ({ params }) => {
                    return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
                },
                element: <BookDetails></BookDetails>
            },
        ]
    }
])

export default router;