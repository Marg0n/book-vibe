import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import ListedBook from "../pages/ListedBook";
import PagesToRead from '../pages/PagesToRead';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: ()=> fetch('../../public/book_list.json'),
            },
            {
                path: '/listedbook',
                element:<ListedBook/>,
            },
            {
                path: '/pagestoread',
                element: <PagesToRead/>
            }
        ],
        // {
        //     // path: '/listedbook/:id',
        // }
    },
]);