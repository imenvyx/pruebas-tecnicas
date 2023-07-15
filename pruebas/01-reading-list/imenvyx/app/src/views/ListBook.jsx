import BookCard from "../components/BookCard/BookCard";
import books from "../data/books.json";

function ListBook() {
  console.log(books.library);
  return (
    <div className="section-container">
      <div className=" grid grid-cols-4">
        {books.library.map((book) => (
          <BookCard key={book.ISBN} book={book} />
        ))}
      </div>
    </div>
  );
}

export default ListBook;
