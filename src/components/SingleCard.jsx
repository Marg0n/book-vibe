// import React from "react";
import { PropTypes } from 'prop-types';
import Tag from './Tag';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';


const SingleCard = ({ book }) => {

  // console.log(book);

  // const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link
    to={`/book/${bookId}`} 
    className="border rounded-xl">
      <div className="card shadow-xl min-h-[80vh]">
        <figure className="mx-8 mt-8 p-8 rounded-xl bg-gray-200">
          <img
            src={image}
            alt="Book image"
            className="rounded-xl h-56 w-auto"
          />
        </figure>
        <div className="card-body items-center text-start ">
          <p className='w-full  '>
            {
              tags.map((tag, idx) => <Tag key={idx} tag={tag} />)
            }
          </p>
          <div className="h-16 w-full space-y-2 mt-4">
            <h2 className="text-xl font-semibold text-start">{bookName}</h2>
            <p className="text-base">By : <span className='font-semibold'> {author}</span></p>
          </div>

          <div className="divider"></div>

          <div className="w-full flex justify-between">
            <small className="flex gap-2 items-center">
              {category}
            </small>
            <small className="flex gap-2 items-center">
              {rating}
              <CiStar
                size={20}
              />
            </small>
          </div>
        </div>
      </div>
    </Link>
  );
};

SingleCard.propTypes = {
  book: PropTypes.object,
}

export default SingleCard;
