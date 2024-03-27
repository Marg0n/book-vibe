import { useEffect, useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
import { getReadBooks } from '../utils/storage';
import StorageCard from './StorageCard';

const ShowStoredBooks = () => {

    const [bookDetails, setBookDetails] = useState([]);
    // const book = useLoaderData();
    // console.log(book);

    // const { bookId } = book;

    useEffect(() => {

        setBookDetails(getReadBooks());
    }, [])

    return (
        <div
            // to={`/book/${bookId}`}
            className="grid md:grid-cols-1 gap-8"
        >
            {
                bookDetails.map((book, idx) => (
                    <StorageCard key={idx} book={book} />
                ))
            }

        </div>
    );
};

export default ShowStoredBooks;