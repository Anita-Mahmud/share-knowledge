import React from 'react';

const Items = ({advertise}) => {
    return (
        <div>
 {!advertise.paid?  
 <div className="card bg-base-100 shadow-xl">
  <figure><img src={advertise.img} alt={advertise.name} className='w-full h-52'/></figure>
  <div className="card-body">
    <h2 className="card-title">{advertise.name}</h2>
    <p>Category: {advertise.cat_name}</p>
    <p>Condition: {advertise.condition}</p>
    <p>Description: {advertise.description}</p>
    <p>Price: {advertise.resale_price} taka</p>
    
  </div>
</div>: ''}
        </div>
    );
};

export default Items;