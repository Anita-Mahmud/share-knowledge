import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import Loading from '../../components/Loading';
import Category from './Category';

const Categories = () => {
//     const [categories,setCategories] = useState([]);
//     axios.get('http://localhost:5000/categories')
// .then(categories => {
//     setCategories(categories.data);
// });
const url = 'http://localhost:5000/categories';
    const { data: categories = [],isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
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