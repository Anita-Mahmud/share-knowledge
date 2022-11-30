import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Sidebar from '../../../components/Sidebar';
import { AuthContext } from '../../../context/AuthProvider';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
       <div className='mx-36'>
        <Sidebar></Sidebar>
         <div>
             <h2 className='font-lobster text-6xl text-center'>My Orders</h2>
           
                {bookings.length>0?
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td></tr>
                        )}
                        </tbody>
                    </table>
                
                :<h3 className='text-red-600 text-5xl text-center'>No Order</h3>}
             </div>

        </div>
      
    );
};

export default Orders;