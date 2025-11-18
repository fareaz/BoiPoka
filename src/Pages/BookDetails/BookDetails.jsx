import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";

import { addToStoredDB } from "../../Utility/addToStoredDB";
import { addToWishList } from "../../Utility/addToWishList";

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const allBooks = useLoaderData() || [];

  const clickId = Number(bookId); 

  const matchedBook = allBooks.find((book) => book.bookId === clickId);

  if (!matchedBook) {
    return (
      <div className="text-center mt-10 text-xl text-gray-500">
        Book not found.
      </div>
    );
  }

  const {
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    image,
    tags = [],
    publisher,
    yearOfPublishing,
  } = matchedBook;

  const handleMarkAsRead = () => {
    addToStoredDB(clickId);
    alert("Book marked as Read!");
  };

  const handleMarkAsWishList = () => {
    addToWishList(clickId);
    alert("Book added to Wishlist!");
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
        <h2 className="text-2xl font-semibold">By: {author}</h2>
        <h3 className="text-lg">{category}</h3>

        <p className="text-xl">
          <span className="font-bold">Review: </span>
          {review}
        </p>

        {/* Tags */}
        <div className="card-actions">
          <h2>Tags:</h2>
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge bg-green-100 text-green-500 font-semibold"
            >
              #{tag}
            </div>
          ))}
        </div>

        {/* Details Section */}
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

        {/* Buttons */}
        <div className="card-actions">
          <button onClick={handleMarkAsRead} className="btn btn-active">
            Mark as Read
          </button>
          <button
            onClick={handleMarkAsWishList}
            className="btn btn-accent text-white"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
