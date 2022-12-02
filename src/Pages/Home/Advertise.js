import axios from 'axios';
import React, { useState } from 'react';
import Items from './Items';
import { useQuery } from '@tanstack/react-query';
const Advertise = () => {
//     const [advertises,setAdvertises] = useState([]);
//     axios.get('https://share-knowledge-server-anita-mahmud.vercel.app/advertise')
// .then(advertises => {
//     setAdvertises(advertises.data);
// });
const {data: advertises = [], refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async() =>{
        const res = await fetch('https://share-knowledge-server-anita-mahmud.vercel.app/advertise'
        // ,{
        //     headers: {
        //         authorization: `bearer ${localStorage.getItem('accessToken')}`
        //     }
        // }
        );
        const data = await res.json();
        return data;
    }
});
    return (
        <div className='my-20'>
            {
                advertises.length>0 ? 
                <div >
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 mx-auto'>
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