import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading';
import Sidebar from '../../../components/Sidebar';

const Buyers = () => {
    const url = 'https://share-knowledge-server-anita-mahmud.vercel.app/users/buyers';

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = id => {
        fetch(`https://share-knowledge-server-anita-mahmud.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Deleted successfully')
                }
            })
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 mb-36'>
           <div className='mx-auto'>
            <Sidebar></Sidebar>
            </div>
            <div className='col-span-2'>
                <h2 className='font-lobster text-6xl text-center mb-4'>All Buyers</h2>

                {buyers.length > 0 ?
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

                                buyers.map((buyer, i) => <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email} </td>
                                    <td><button className='btn btn-info' onClick={() => handleDelete(buyer._id)}>Delete</button></td>
                                </tr>
                                )}
                        </tbody>
                    </table>

                    : <h3 className='text-red-600 text-5xl text-center'>No Data</h3>}
            </div>

        </div>

    );
};

export default Buyers;