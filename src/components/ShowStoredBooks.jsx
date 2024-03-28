import { useEffect, useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
import { getReadBooks } from '../utils/storage';
// import StorageCard from './StorageCard';
import { PropTypes } from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Tag from './Tag';


const ShowStoredBooks = ({ sortBy }) => {

    const [bookDetails, setBookDetails] = useState([]);
    // const book = useLoaderData();
    // console.log(book);

    // const { bookId } = book;

    useEffect(() => {

        setBookDetails(getReadBooks());
    }, [])

    const sortedBooks = [...bookDetails].sort((a, b) => {
        // console.log('wish',sortBy);
        if (sortBy === 'rating') {
            return b.rating - a.rating;
        } else if (sortBy === 'pages') {
            return b.totalPages - a.totalPages;
        } else if (sortBy === 'year') {
            return b.yearOfPublishing - a.yearOfPublishing;
        }
        return 0;
    });

    return (
        <div
            // to={`/book/${bookId}`}
            className="grid grid-cols-1 gap-10"
        >
            {/* {
                bookDetails.map((book, idx) => (
                    <StorageCard key={idx} book={book} sortBy={sortBy}/>
                ))
            } */}

            <div >
                {sortedBooks.map((book, idx) => (


                    <Link
                        to={`/book/${book.bookId}`}
                        key={idx}
                        className="card card-side shadow-xl border-2 p-4 flex flex-col md:flex-row my-6">
                        <figure className='lg:w-1/4 bg-base-300 py-6 rounded-lg'>
                            <img
                                src={book.image}
                                alt="Book image"
                                className="rounded-xl h-56 w-auto"
                            />
                        </figure>
                        <div className="card-body lg:w-3/4 ">
                            <h2 className="card-title text-xl font-semibold text-start">{book.bookName}</h2>
                            <p className="text-base">By : <span className='font-semibold'>
                                {book.author}
                            </span></p>
                            <div className='flex w-full lg:gap-16 gap-4 flex-col md:flex-row'>
                                <p className='lg:w-2/3 '>
                                    <span className='font-semibold '>Tag : </span>
                                    {
                                        book.tags.map((tag, idx) => <Tag key={idx} tag={tag} />)
                                    }
                                </p>
                                <p className='lg:w-2/3 flex items-center gap-2 justify-start'>
                                    <CiLocationOn />
                                    Year of Publishing : {book.yearOfPublishing}
                                </p>
                            </div>

                            <div className="divider"></div>

                            <div className=" flex flex-col md:flex-row w-max gap-4 justify-center items-center ">
                                <p className='bg-blue-100 rounded-2xl py-1 px-2 mr-6 text-blue-600 w-max '>Category : {book.category}</p>
                                <p className='bg-amber-200 rounded-2xl py-1 px-2 mr-6 text-amber-600 w-max'>Rating : {book.rating}</p>
                                <button className="btn bg-green-500 justify-start hover:btn-accent">View Details</button>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>

        </div>
    );
};

ShowStoredBooks.propTypes = {
    sortBy: PropTypes.string,
}

export default ShowStoredBooks;