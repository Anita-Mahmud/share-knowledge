import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading';
import Sidebar from '../../../components/Sidebar';

const Sellers = () => {
    const url = 'https://share-knowledge-server-anita-mahmud.vercel.app/users/sellers';

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
        fetch(`https://share-knowledge-server-anita-mahmud.vercel.app/users/${id}`, {
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
    const handleVerify = email =>{
        console.log(email);
        fetch(`https://share-knowledge-server-anita-mahmud.vercel.app/users/${email}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // } 
        
        }
        )
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Verified successful.')
                refetch();
            }
        })
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 mb-36'>
            <div className='mx-auto'>
            <Sidebar></Sidebar>
            </div>
            <div className='col-span-2'>
                <h2 className='font-lobster text-6xl text-center mb-4'>All Sellers</h2>

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
                                    {!seller.verified?<button className='btn btn-info' onClick={()=>handleVerify(seller.email)}>verify</button>:<CheckBadgeIcon className='text-blue-500 w-12'></CheckBadgeIcon>}</td>
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