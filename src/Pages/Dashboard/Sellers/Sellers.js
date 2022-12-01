import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading';
import Sidebar from '../../../components/Sidebar';

const Sellers = () => {
    const url = 'http://localhost:5000/users/sellers';

    const { data: sellers = [],isLoading,refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    const handleDelete = id =>{
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success('Deleted successfully')
            }
        })
    }
    const handleVerify = id =>{
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT', 
        
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Verified successful.')
                refetch();
            }
        })
    }
    return (
        <div className='mx-36'>
            <Sidebar></Sidebar>
            <div>
                <h2 className='font-lobster text-6xl text-center'>All Sellers</h2>

                {sellers.length > 0 ?
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                sellers.map((seller, i) => <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email} </td>
                                    <td className='flex justify-center'>
                                        <button className='btn btn-info mr-2' onClick={()=>handleDelete(seller._id)}>Delete</button>
                                    {!seller.verified?<button className='btn btn-info' onClick={()=>handleVerify(seller._id)}>verify</button>:<CheckBadgeIcon className='text-blue-500 w-12'></CheckBadgeIcon>}</td>
                                </tr>
                                )}
                        </tbody>
                    </table>

                    : <h3 className='text-red-600 text-5xl text-center'>No Data</h3>}
            </div>

        </div>

    );
};

export default Sellers;