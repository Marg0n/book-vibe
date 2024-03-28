import { PropTypes } from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Tag from './Tag';


const StorageCard = ({ book }) => {

    const { bookId, bookName, author, image,
        // review, totalPages, 
        rating, category, tags,
        // publisher, 
        yearOfPublishing } = book;

    

    return (

        <div>
            
            <Link
                to={`/book/${bookId}`}
                className="card card-side shadow-xl border-2 p-4 flex flex-col md:flex-row">
                <figure className='lg:w-1/4 bg-base-300 py-6 rounded-lg'>
                    <img
                        src={image}
                        alt="Book image"
                        className="rounded-xl h-56 w-auto"
                    />
                </figure>
                <div className="card-body lg:w-3/4 ">
                    <h2 className="card-title text-xl font-semibold text-start">{bookName}</h2>
                    <p className="text-base">By : <span className='font-semibold'>
                        {author}
                    </span></p>
                    <div className='flex w-full lg:gap-16 gap-4 flex-col md:flex-row'>
                        <p className='lg:w-1/3 '>
                            <span className='font-semibold '>Tag : </span>
                            {
                                tags.map((tag, idx) => <Tag key={idx} tag={tag} />)
                            }
                        </p>
                        <p className='lg:w-2/3 flex items-center gap-2 justify-start'>
                            <CiLocationOn />
                            Year of Publishing : {yearOfPublishing}
                        </p>
                    </div>

                    <div className="divider"></div>

                    <div className=" flex flex-col md:flex-row w-max gap-4 justify-center items-center ">
                        <p className='bg-blue-100 rounded-2xl py-1 px-2 mr-6 text-blue-600 w-max '>Category : {category}</p>
                        <p className='bg-amber-200 rounded-2xl py-1 px-2 mr-6 text-amber-600 w-max'>Rating : {rating}</p>
                        <button className="btn bg-green-500 justify-start hover:btn-accent">View Details</button>
                    </div>
                </div>
            </Link>
        </div>

    );
};

StorageCard.propTypes = {
    book: PropTypes.object,
    // sortBy: PropTypes.string,
}

export default StorageCard;