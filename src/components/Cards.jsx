import SingleCard from "./SingleCard";
import { PropTypes } from 'prop-types';


const Cards = ({ books }) => {


  const { bookId } = books;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {
        books.map((book) => (
          <SingleCard key={bookId} book={book} />
        ))
      }

    </div>
  );
};

Cards.propTypes = {
  books: PropTypes.array,
}


export default Cards;
