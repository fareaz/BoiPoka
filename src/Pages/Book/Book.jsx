import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
const Book = ({ book }) => {
  
  const { image, bookName, author, rating, category, tags ,bookId } = book;
  return (

   <Link to={`/bookDetails/${bookId}`} >
   <div className="card bg-gray-100 w-96 p-3 shadow-sm">
      <figure className="p-5 bg-white ">
        <img src={image} alt="Shoes" className="rounded-xl h-[300px] " />
      </figure>
      <div className="card-body space-y-1 ">
        <div className="card-actions justify-start">
          {tags.map((tag,index) => (
            <div key={index} className="badge font-semibold bg-green-100 text-green-500">{tag}</div>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p className="border-b-1 border-dashed">By : {author}</p>
        
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {rating} <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div>
   </Link> 
    
  );
};

export default Book;
