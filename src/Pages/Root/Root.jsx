import React from 'react';
import Navbar from '../../Componemts/Header/Navbar';
import Footer from '../../Componemts/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='max-w-6xl mx-auto '>
                  <Outlet></Outlet>
            </div>
            <div className='max-w-7xl mx-auto '>
            <Footer></Footer> 
            </div> 
        </div>
    );
};

export default Root;