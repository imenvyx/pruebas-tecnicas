import PropTypes from "prop-types";
function BookCard({ book }) {
  const { author, cover, genre, pages, synopsis, title, year } = book;

  console.log(book);
  return <div>
    
  </div>;
}

BookCard.propTypes = {
  book: PropTypes.object,
  author: PropTypes.string,
  cover: PropTypes.string,
  genre: PropTypes.string,
  pages: PropTypes.number,
  synopsis: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
};

export default BookCard;
