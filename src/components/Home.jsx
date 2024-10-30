import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-3xl'>This is home Page</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;