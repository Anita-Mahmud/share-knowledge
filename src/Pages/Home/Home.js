import React from 'react';
import Categories from '../Categories/Categories';
import Banner from './Banner';
import Review from './Review';

const Home = () => {
    return (
        <div className='lg:mx-16'>
            <Banner></Banner>
            <Categories></Categories>
            <Review></Review>
        </div>
    );
};

export default Home;