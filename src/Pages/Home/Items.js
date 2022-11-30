import React from 'react';

const Items = ({advertise}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={advertise.img} alt={advertise.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{advertise.name}</h2>
    <p>Condition: {advertise.condition}</p>
    <p>Description: {advertise.description}</p>
    <p>Price: {advertise.resale_price} taka</p>
    
  </div>
</div>
        </div>
    );
};

export default Items;