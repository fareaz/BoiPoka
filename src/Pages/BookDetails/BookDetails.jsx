import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router'; // 
import { addToStoredDB } from '../../Utility/addToStoredDB';
import { addToWishList } from '../../Utility/addToWishList';

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate(); 
  const allBooks = useLoaderData();

  const clickId = parseInt(bookId);
  const matchedBook = allBooks.find((book) => book.bookId === clickId);

  const { 
    bookName, author, review, totalPages, rating,
    category, image, tags = [], publisher, yearOfPublishing 
  } = matchedBook || {};

  const handleMarkAsRead = (id) => {
    alert("Book marked as read!");
    addToStoredDB(id);
  };

  const handleMarkAsWishList = (id) => {
    alert("Book added to wishlist!");
    addToWishList(id);
  };

  return (
    <div className="max-w-7xl mx-auto card lg:card-side bg-gray-100 shadow-sm my-5">
      
   
      <button 
        onClick={() => navigate(-1)} 
        className="btn btn-outline btn-sm ml-5 mt-5"
      >
        ← Back
      </button>

      <figure className="w-1/2 p-5 flex-1">
        <img src={image} alt={bookName} />
      </figure>

      <div className="card-body flex-1">
        <h2 className="text-3xl font-bold">{bookName}</h2>
        <h2 className="text-2xl font-semibold"> By: {author}</h2>
        <h3 className="text-lg">{category}</h3>
        <p className="text-xl">
          <span className="font-bold">Review:</span> {review}
        </p>

        <div className="card-actions">
          <h2>Tags:</h2>
          {tags.map((tag, index) => (
            <div key={index} className="badge font-semibold bg-green-100 text-green-500">
              {tag}
            </div>
          ))}
        </div>

        <div className="flex gap-20 text-lg my-5">
          <div>
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>

          <div>
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>

        <div className="card-actions">
          <button onClick={() => handleMarkAsRead(clickId)} className="btn btn-active">
            Read
          </button>

          <button onClick={() => handleMarkAsWishList(clickId)} className="btn btn-accent text-white font-bold">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
