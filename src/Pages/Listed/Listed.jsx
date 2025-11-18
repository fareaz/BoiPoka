import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const Listed = () => {
  const allBooks = useLoaderData() || [];
  const [readIds, setReadIds] = useState([]);

  useEffect(() => {
    try {
      const data = localStorage.getItem("readList");
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) {
          setReadIds(parsed);
        } else {
          setReadIds([]);
        }
      } else {
        setReadIds([]);
      }
    } catch (err) {
      console.error("Error parsing readList from localStorage:", err);
      setReadIds([]);
    }
  }, []);

  const storedBooks = Array.isArray(allBooks)
    ? allBooks.filter((book) => readIds.includes(book.bookId?.toString()))
    : [];

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Books I&apos;ve Read
      </h1>

      {storedBooks.length === 0 ? (
        <h2 className="text-2xl font-semibold text-center text-gray-500">
          No books read yet.
        </h2>
      ) : (
        <div className="max-w-6xl mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {storedBooks.map((book) => (
            <div
              key={book.bookId}
              className="card bg-base-100 shadow-md hover:shadow-xl border border-base-200 transition-transform hover:-translate-y-1"
            >
              <div className="card-body">
                <div className="flex justify-between items-start gap-2">
                  <h2 className="card-title text-lg line-clamp-2">
                    {book.bookName}
                  </h2>
                  <span className="badge badge-accent text-xs">
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

export default Listed;
