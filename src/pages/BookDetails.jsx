import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Tag from '../components/Tag';
import { saveReadBooks, saveWishlist } from '../utils/storage';

const BookDetails = () => {

    const { id } = useParams();
    // console.log(id);

    const [bookDetails, setBookDetails] = useState({});
    const book = useLoaderData();
    // console.log(book);

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = bookDetails;

    useEffect(() => {
        const singleBook = book.find(item => item.bookId == id);
        // console.log(singleBook);
        setBookDetails(singleBook);
    }, []);

    const handleRead = e => {
        // console.log(e)
        saveReadBooks(e);

    };
    const handleWishlist = e => {
        // console.log(e)
        saveWishlist(e);
    };

    return (
        <section className="container mx-auto">
            <div className="space-y-6 sm:space-y-12">
                <div
                    className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 mb-16">

                    <div className="object-cover w-full min-h-64 rounded sm:min-h-[calc(100vh-114px)] lg:col-span-5 dark:bg-base-300 flex justify-center items-center">
                        <img
                            src={image}
                            alt=""
                            className="w-full h-64 rounded sm:h-[calc(100vh-114px)] p-12"
                        />
                    </div>

                    <div className="p-7 space-y-2 lg:col-span-6">
                        <h3 className="text-2xl font-semibold sm:text-4xl">
                            {bookName}
                        </h3>

                        <p
                            className="text-base dark:text-gray-600">
                            By : <span className=' font-semibold'>
                                {author}
                            </span>
                        </p>

                        <div className="divider"></div>

                        <h3 className='font-semibold text-base'>{category}</h3>

                        <div className="divider"></div>
                        <div className='space-y-6'>
                            <p >
                                <span className='font-bold text-base'>
                                    Review :
                                </span> {review}
                            </p>
                            <p className='w-full'>
                                <span className='font-bold text-base mr-6'>
                                    Tag :
                                </span>
                                {
                                    tags?.map((tag, idx) => <Tag
                                        key={idx}
                                        tag={tag}
                                    />)
                                }
                            </p>
                        </div>
                        <div className="divider"></div>

                        <div className="overflow-x-auto">
                            <table className="table table-zebra">

                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>
                                            Number of Pages:
                                        </td>
                                        <td className='font-bold'>
                                            {totalPages}
                                        </td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>
                                            Publisher:
                                        </td>
                                        <td className='font-bold'>
                                            {publisher}
                                        </td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>
                                            Year of Publishing:
                                        </td>
                                        <td className='font-bold'>
                                            {yearOfPublishing}
                                        </td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>

                                        <td>
                                            Rating:
                                        </td>
                                        <td className='font-bold'>
                                            {rating}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='gap-6 flex pt-6'>
                            <button
                                onClick={() => handleRead(bookDetails)}
                                className="btn btn-ghost btn-outline border-base-300">
                                Read
                            </button>
                            <button
                                onClick={() => handleWishlist(bookDetails)}
                                className="btn btn-accent hover:btn-info">
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default BookDetails;