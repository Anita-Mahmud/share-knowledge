import React from 'react';
import Categories from '../Categories/Categories';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='lg:mx-16'>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;