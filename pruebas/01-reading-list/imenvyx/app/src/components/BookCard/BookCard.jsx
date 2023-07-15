import PropTypes from "prop-types";

import "./book-card.css";
function BookCard({ book }) {
  const { author, cover, genre, synopsis, title } = book;

  console.log(author);
  return (
    <div className="group  grid-book-card-container">
      <img id="grid-book-card-img" src={cover} alt="" className="" />
      <div
        id="grid-book-card"
        className="rounded-md shadow shadow-gray-600 border border-indigo-900"
      />
      <div id="grid-book-card-text">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-sm mb-2 font-semibold"> by {author.name}</p>
        <p className="text-sm mb-2"> {genre}</p>
        <p>{synopsis}</p>
      </div>
    </div>
  );
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
