
import { PropTypes } from 'prop-types';
import SingleCard from "./SingleCard";


const Cards = ({ books }) => {


  // const { bookId } = books;

  return (
    <div

      className="grid md:grid-cols-3 gap-8"
    >
      {
        books.map((book, idx) => (
          <SingleCard key={idx} book={book} />
        ))
      }

    </div>
  );
};

Cards.propTypes = {
  books: PropTypes.array,
}


export default Cards;
