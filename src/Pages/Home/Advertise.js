import axios from 'axios';
import React, { useState } from 'react';
import Items from './Items';

const Advertise = () => {
    const [advertises,setAdvertises] = useState([]);
    axios.get('https://share-knowledge-server.vercel.ap/advertise')
.then(advertises => {
    setAdvertises(advertises.data);
});
    return (
        <div className='my-20'>
            {
                advertises.length>0?
                <div >
                    <h2 className='font-lobster text-6xl italic text-center'>Advertised Items</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
                    {advertises.map(advertise=><Items 
                    key={advertise._id} advertise={advertise}
                    ></Items>)}
                </div>
               
                </div>  : ''
            }
        </div>
    );
};

export default Advertise;