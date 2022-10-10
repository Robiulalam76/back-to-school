import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, isbn13, price, subtitle, title, url } = book

    return (
        <div>

            <div class="w-full relative h-[400px] max-w-sm bg-blue-200 rounded-lg shadow-md dark:border-gray-700 mx-auto">
                <a href="#">
                    <img class=" mx-auto h-44 w-56 rounded-t-lg" src={image} alt="product image"></img>
                </a>
                <div class="px-5 pb-5">
                    <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">{title}</h5>
                    <h5 class="tracking-tight text-gray-600">{subtitle && subtitle.slice(0, 50) + '...'}</h5>
                    <div class="">
                        <button class="text-3xl absolute bottom-16 font-bold text-pink-600">{price}</button>
                    </div>
                </div>
                <div>
                    <Link to={`/book-details/${isbn13}`} className='bg-rose-600 hover:bg-rose-800 text-center rounded-b-lg absolute bottom-0 w-full py-3 text-white font-bold'>Book Details</Link>
                </div>
            </div>

        </div >
    );
};

export default Book;