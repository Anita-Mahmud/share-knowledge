import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading';
import Sidebar from '../../../components/Sidebar';

const Sellers = () => {
    const url = 'https://share-knowledge-server.vercel.ap/users/sellers';

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
        fetch(`https://share-knowledge-server.vercel.ap/users/${id}`, {
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
        fetch(`https://share-knowledge-server.vercel.ap/products/${id}`, {
            method: 'PUT', 
           
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Verified')
               
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
                                    <td><button className='btn btn-info' onClick={()=>handleDelete(seller._id)}>Delete</button>
                                    <button className='btn btn-info' onClick={()=>handleVerify(seller._id)}>Verify</button></td>
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