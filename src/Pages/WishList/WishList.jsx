import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const WishList = () => {
  const allBooks = useLoaderData() || [];
  const [wishIds, setWishIds] = useState([]);
  

  useEffect(() => {
    try {
      const stored = localStorage.getItem("wishlist");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setWishIds(parsed);
        } else {
          setWishIds([]);
        }
      }
    } catch (err) {
      console.error("Error reading wishlist from localStorage:", err);
      setWishIds([]);
    }
  }, []);

  const wishList = Array.isArray(allBooks)
    ? allBooks.filter((book) => wishIds.includes(book.bookId?.toString()))
    : [];

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Wishlist</h1>

      {wishList.length === 0 ? (
        <h2 className="text-2xl font-semibold text-center text-gray-500">
          No books in wishlist.
        </h2>
      ) : (
        <div className="max-w-6xl mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {wishList.map((book) => (
            <div
              key={book.bookId}
              className="card bg-base-100 shadow-md hover:shadow-xl border border-base-200 transition-transform hover:-translate-y-1"
            >
              <div className="card-body">
                <div className="flex justify-between items-start gap-2">
                  <h2 className="card-title text-lg line-clamp-2">
                    {book.bookName}
                  </h2>
                  <span className="badge badge-secondary text-xs">
                    ⭐ {book.rating}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  by <span className="font-medium">{book.author}</span>
                </p>

                <p className="text-sm mt-3 line-clamp-3">{book.review}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
