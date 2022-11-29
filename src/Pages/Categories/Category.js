import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Category = ({category}) => {
    const {_id,cat_name,img}=category;
    return (
        <div className='mt-10'>
            <div className="card bg-base-100 shadow-xl image-full h-96">
                <figure><img src={img} alt={cat_name} className='w-full brightness-75'/></figure>
                <div className="card-body flex  justify-center items-center">
                    <h2 className="card-title text-4xl font-bold text-white">{cat_name}</h2>
                   
                    <div className="card-actions tooltip tooltip-right tooltip-info" data-tip="Details">
                   <Link to={`/category/${_id}`}> <ArrowLongRightIcon className="w-20 text-blue-300"/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;