import Cards from "./Cards";
import PropTypes from 'prop-types';

const BooksList = ({books}) => {

  
  return (
    <div className="my-8 container mx-auto">
      <h1
        className="my-6 text-4xl font-semibold text-center
      "
      >
        Books
      </h1>
      <Cards books={books}/>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array,
}

export default BooksList;
