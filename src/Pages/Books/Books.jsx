import Book from "../Book/Book";


const Books = ({booksData}) => {
  
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-5'>Books </h2>
            <input type="search"  id="" />
            <div className="grid lg:grid-cols-3 gap-5 justify-items-center mb-5">
                {booksData.map(book=><Book key={book.bookId} book={book} ></Book>)}
            </div>
        </div>
    );
};

export default Books;