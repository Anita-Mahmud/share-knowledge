import axios from 'axios';
import React, { useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories,setCategories] = useState([]);
    axios.get('https://share-knowledge-server.vercel.ap/categories')
.then(categories => {
    setCategories(categories.data);
});
console.log(categories);
    return (
        <div className='my-20'>
            <h2 className='font-lobster text-6xl italic text-center'>Categories</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {categories.map(category=><Category
            key={category._id}
            category={category}
            ></Category>)}
           </div>
        </div>
    );
};

export default Categories;