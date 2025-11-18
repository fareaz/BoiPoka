import React from 'react';
import Img  from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div  className=' lg:flex justify-between items-center bg-gray-200 rounded-lg my-5 p-5 mx-3'>
            <div className='mb-10'>
                <h2 className='font-bold text-3xl mb-5'>Books to freshen up <br /> your bookshelf</h2>
                <a className="btn btn-ghost bg-green-500 text-white mr-5">View The List</a>
            </div>
            <figure  >
                <img  src={Img} alt="" className='  rounded-lg ' />
            </figure>
        </div>
    );
};

export default Banner;