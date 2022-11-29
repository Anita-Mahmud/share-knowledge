import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Product = ({ product }) => {
    const { _id, cat_name, cat_id, img, name, location, resale_price, original_price, used_years, posted_on, seller_name, verified } = product;
    return (
        <div>
            <div className="card lg:card-side shadow-xl ">
                <figure><img src={img} alt={name} className='w-full h-96'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h5><span>Location:</span> {location}</h5>
                    <h5><span>Original Price:</span> {original_price} Taka</h5>
                    <h5><span>Resale Price:</span> {resale_price} Taka</h5>
                    <h5><span>Years of Use:</span> {used_years}</h5>
                    <h5><span>Posted On:</span> {posted_on}</h5>
                   <div className='flex items-center'>
                   <h5><span>Seller:</span> {seller_name}</h5>
                  {
                    verified? <CheckBadgeIcon className='w-6 ml-2 text-blue-400'></CheckBadgeIcon>: ''
                  }
                   </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;