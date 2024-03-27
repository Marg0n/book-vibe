import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";
import { PropTypes } from 'prop-types';


const Cards = ({ books }) => {


  // const { bookId } = books;

  return (
    <Link 
    to={'/'}
    className="grid md:grid-cols-3 gap-8"
    >
      {
        books.map((book,idx) => (
          <SingleCard key={idx} book={book} />
        ))
      }

    </Link>
  );
};

Cards.propTypes = {
  books: PropTypes.array,
}


export default Cards;
