import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Nav from '../Pages/Shared/Header/Nav';

const Main = () => {
    return (
        <div>
         <div className='max-w-[1440px]'>
         <Nav></Nav> 
        <Outlet></Outlet>
        </div>   
           <Footer></Footer>
        </div>
    );
};

export default Main;