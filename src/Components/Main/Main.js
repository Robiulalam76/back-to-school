import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
export const BooksContext = createContext([])

const Main = () => {
    const books = useLoaderData()
    return (
        <BooksContext.Provider value={books}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </BooksContext.Provider>
    );
};

export default Main;