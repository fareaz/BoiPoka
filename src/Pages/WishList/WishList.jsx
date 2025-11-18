import React from "react";
import { useLoaderData } from "react-router";

const WishList = () => {
  const allBooks = useLoaderData() || [];

  const stored = localStorage.getItem("wishlist");
  const wishIds = stored ? JSON.parse(stored) : []; 

  const wishList = allBooks.filter((book) =>
    wishIds.includes(book.bookId)
  );

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Wishlist</h1>

      {wishList.length === 0 ? (
        <h2 className="text-2xl text-center text-gray-500">
          No books in wishlist.
        </h2>
      ) : (
        <div className="max-w-6xl mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {wishList.map((book) => (
            <div
              key={book.bookId}
              className="card bg-base-100 border shadow-md hover:shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">{book.bookName}</h2>
                <p className="text-sm text-gray-600">by {book.author}</p>
                <p className="text-sm mt-2 line-clamp-3">{book.review}</p>
                <p className="mt-1 font-semibold">⭐ {book.rating}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
