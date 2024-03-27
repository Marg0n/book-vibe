import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import ShowStoredBooks from "../components/ShowStoredBooks";
import ShowWishlistBooks from "../components/ShowWishlistBooks";
import MainLayouts from "../layouts/MainLayouts";
import BookDetails from "../pages/BookDetails";
import Home from "../pages/Home";
import Interview from "../pages/Interview";
import ListedBook from "../pages/ListedBook";
import PagesToRead from '../pages/PagesToRead';
import WishlistChart from "../pages/WishlistChart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('/book_list.json'),
            },
            {
                path: '/listedbook',
                element: <ListedBook />,
                loader: () => fetch('/book_list.json'),
                children: [
                    {
                        index: true,
                        element: <ShowStoredBooks />,
                        loader: () => fetch('/book_list.json'),
                    },
                    {
                        path: 'wishlist',
                        element: <ShowWishlistBooks />,
                        loader: () => fetch('/book_list.json'),
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
                loader: () => fetch('/book_list.json'),
            },
            {
                path: '/wishtoread',
                element: <WishlistChart />,
                loader: () => fetch('/book_list.json'),
            },
            {
                path: '/interview',
                element: <Interview />,
                loader: () => fetch('/interview.json'),
            },
        ],
    },
]);