import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import MainLayouts from "../layouts/MainLayouts";
import BookDetails from "../pages/BookDetails";
import Home from "../pages/Home";
import ListedBook from "../pages/ListedBook";
import PagesToRead from '../pages/PagesToRead';
import ShowStoredBooks from "../components/ShowStoredBooks";
import ShowWishlistBooks from "../components/ShowWishlistBooks";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('../../public/book_list.json'),
            },
            {
                path: '/listedbook',
                element: <ListedBook />,
                loader: () => fetch('../../public/book_list.json'),
                children: [
                    {
                        index: true,
                        element: <ShowStoredBooks />,
                        loader: () => fetch('../../public/book_list.json'),
                    },
                    {
                        path: 'wishlist',
                        element: <ShowWishlistBooks />,
                        loader: () => fetch('../../public/book_list.json'),
                    }
                ],
            },
            {
                path: '/pagestoread',
                element: <PagesToRead />
            },
            {
                path: '/book/:id',
                element: <BookDetails />,
                loader: () => fetch('../../public/book_list.json'),
            },
        ],
    },
]);