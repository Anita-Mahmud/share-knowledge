import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar';
import { AuthContext } from '../../../context/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const url = `https://share-knowledge-server-anita-mahmud.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url
        // {
        // headers: {
        // authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }}
        );
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 '>
           <div className='mx-auto'>
            <Sidebar></Sidebar>
            </div>
            <div className='col-span-2'>
                <h2 className='font-lobster text-6xl text-center mb-4'>My Orders</h2>

                {bookings.length > 0 ?
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                bookings.map((booking, i) => <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={booking?.img} alt=""/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{booking.product_name}</td>
                                    <td>$ {booking.price}</td>
                                    
                                    <td>
                                    {
                                        !booking.paid && <Link
                                            to={`/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                        {booking.paid &&<button className='btn btn-info' disabled>Paid</button>}</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>

                    : <h3 className='text-red-600 text-5xl text-center'>No Order</h3>}
            </div>

        </div>

    );
};

export default Orders;